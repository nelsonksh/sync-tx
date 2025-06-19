import { PrismaClient, ScriptCategory, NetworkValidator } from "../../prisma/generated/client";
import seed from "../seed.json";
import { miniBlockfrost } from "../mini-blockfrost";
import { saveUtxos } from "./sync-utxos";
import { sdk } from "../utils/sdk";

const NetworkAddresses = () => {
    return {
        [sdk.provider.core.network.globalState.address]: "GlobalStateValidator",
        [sdk.provider.core.network.aliasIndex.address]: "AliasIndexValidator",
        [sdk.provider.core.network.instance.address]: "InstanceValidator",
        [sdk.provider.core.network.governance.address]: "GovernanceValidator",
    } as Record<string, NetworkValidator>;
};

export async function syncTxs(prisma: PrismaClient) {
    try {
        let blockHash: string;
        let nextBlocks;

        // Get last sync point
        let transactionSyncTip = await prisma.transactionSyncTip.findFirst();
        if (transactionSyncTip) {
            blockHash = transactionSyncTip.blockHash;
            nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
        } else {
            blockHash = seed.blockHash;
            const previousBlocks = await miniBlockfrost.fetchPreviousBlocks(blockHash);
            blockHash = previousBlocks[previousBlocks.length - 1].hash;
            nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
        }

        // Get address map
        const networkAddressMap = NetworkAddresses();
        const instances = await prisma.instance.findMany({
            select: { address: true, type: true, instancePolicy: true },
        });
        const instanceAddressMap = new Map(instances.map((i) => [i.address, i.type]));

        const allWatchedAddresses = [
            ...Object.keys(networkAddressMap),
            ...Array.from(instanceAddressMap.keys()),
        ];

        let i = 0;

        while (nextBlocks.length > 0) {
            if (i % 100 === 0) {
                console.log(`🔄 Syncing slot ${nextBlocks[0].slot} (block: ${nextBlocks[0].hash})`);
            }

            for (const block of nextBlocks) {
                const processedTxHashes = new Set<string>();
                let blockAddresses;
                try {
                    blockAddresses = await miniBlockfrost.fetchBlockAddresses(block.hash);
                } catch (error) {
                    console.error(`❌ Failed to fetch addresses for block ${block.hash}:`, error);
                    continue;
                }

                const matchingAddresses = blockAddresses.filter((addr: any) =>
                    allWatchedAddresses.includes(addr.address)
                );

                if (matchingAddresses.length === 0) continue;

                for (const addr of matchingAddresses) {
                    const isNetworkAddr = addr.address in networkAddressMap;
                    const validator = isNetworkAddr
                        ? networkAddressMap[addr.address]
                        : instanceAddressMap.get(addr.address);

                    // 🛑 Skip if validator is undefined (unexpected)
                    if (!validator) {
                        console.warn(`⚠️ Skipping address ${addr.address} — validator not found`);
                        continue;
                    }

                    for (const tx of addr.transactions) {
                        if (processedTxHashes.has(tx.tx_hash)) continue;

                        processedTxHashes.add(tx.tx_hash);
                        try {
                            const cbor = await miniBlockfrost.fetchTxCbor(tx.tx_hash);

                            if (isNetworkAddr) {
                                const exists = await prisma.networkTxCbor.findUnique({
                                    where: { txHash: tx.tx_hash },
                                });
                                if (!exists) {
                                    await prisma.networkTxCbor.create({
                                        data: {
                                            txHash: tx.tx_hash,
                                            cbor: cbor.cbor,
                                            validator: validator as NetworkValidator, // ✅ safe cast
                                        },
                                    });

                                    await saveUtxos({
                                        prisma,
                                        tx: {
                                            txHash: tx.tx_hash,
                                            cbor: cbor.cbor,
                                            BlockHash: block.hash,
                                            BlockSlot: block.slot,
                                        },
                                        validatorType: "network",
                                        validator: validator as NetworkValidator, // ✅ safe cast
                                    });

                                    console.log(`🟦 Saved Network tx: ${tx.tx_hash}`);
                                }
                            } else {
                                const exists = await prisma.localStateTxCbor.findUnique({
                                    where: { txHash: tx.tx_hash },
                                });
                                if (!exists) {
                                    await prisma.localStateTxCbor.create({
                                        data: {
                                            txHash: tx.tx_hash,
                                            cbor: cbor.cbor,
                                            localStatePolicy: instances.find(i => i.address === addr.address)?.instancePolicy.policyId || "",
                                            validator: validator as ScriptCategory, // ✅ safe cast
                                        },
                                    });

                                    await saveUtxos({
                                        prisma,
                                        tx: {
                                            txHash: tx.tx_hash,
                                            cbor: cbor.cbor,
                                            BlockHash: block.hash,
                                            BlockSlot: block.slot,
                                        },
                                        validatorType: "localState",
                                        validator: validator as ScriptCategory, // ✅ safe cast
                                        localStatePolicy: instances.find(i => i.address === addr.address)?.instancePolicy.policyId || ""
                                    });

                                    console.log(`🟨 Saved LocalState tx: ${tx.tx_hash}`);
                                }
                            }
                        } catch (error) {
                            console.error(`❌ Failed tx ${tx.tx_hash} in block ${block.hash}:`, error);
                            continue;
                        }
                    }
                }

            }

            // Sync tip
            await prisma.transactionSyncTip.upsert({
                where: { id: 1 },
                update: { slot: nextBlocks[nextBlocks.length - 1].slot, blockHash: nextBlocks[nextBlocks.length - 1].hash },
                create: { id: 1, slot: nextBlocks[nextBlocks.length - 1].slot, blockHash: nextBlocks[nextBlocks.length - 1].hash },
            });

            console.log(`📍 Updated sync tip to slot ${nextBlocks[nextBlocks.length - 1].slot}`);

            blockHash = nextBlocks[nextBlocks.length - 1].hash;
            nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
            i++;
        }
    } catch (error) {
        console.error("❌ Unexpected error in syncTxs:", error);
    }
}
