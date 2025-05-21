import { PrismaClient } from "./../prisma/generated/client";
import seed from "./seed.json";
import { MiniBlockfrost } from "./mini-bf";

export async function syncTxs(miniBlockfrost: MiniBlockfrost) {
    const prismaClient = new PrismaClient();
    try {
        let blockHash;
        let nextBlocks;

        // Get sync tips
        let transactionSyncTip = (await prismaClient.transactionSyncTip.findMany())[0];
        const addressToWatchSyncTip = (await prismaClient.addressToWatchSyncTip.findMany())[0];

        if (transactionSyncTip) {
            blockHash = transactionSyncTip.blockHash;
            nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
        } else {
            blockHash = seed.blockHash;
            const previousBlocks = await miniBlockfrost.fetchPreviousBlocks(blockHash);
            blockHash = previousBlocks[previousBlocks.length - 1].hash;
            nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
        }

        const addressesToWatch = await prismaClient.addressToWatch.findMany();
        const addressMap = new Map(addressesToWatch.map((addr: any) => [addr.value, addr]));

        let i = 0;
        let lastSlot = transactionSyncTip?.slot ?? 0;

        while ((!transactionSyncTip || transactionSyncTip.slot < addressToWatchSyncTip.slot)) {
            if (nextBlocks.length === 0) {
                console.log('Reached the end of the chain or no more blocks available');
                break;
            }

            const currentSlot = nextBlocks[0].slot;
            if (currentSlot === lastSlot) {
                console.log(`Stuck at slot ${currentSlot}, breaking to avoid infinite loop.`);
                break;
            }
            lastSlot = currentSlot;

            if (i % 100 === 0) {
                console.log(`Syncing ⏳ [ Slot: ${currentSlot} - Block: ${nextBlocks[0].hash} ]`);
            }

            for (const block of nextBlocks) {

                if (block.slot > addressToWatchSyncTip.slot) {
                    console.log(`⛔ Reached slot beyond addressToWatchSyncTip: ${block.slot} > ${addressToWatchSyncTip.slot}`);
                    break; // Stop processing further blocks
                }

                let blockAddresses;
                try {
                    blockAddresses = await miniBlockfrost.fetchBlockAddresses(block.hash);
                } catch (error) {
                    console.log(`Failed to fetch addresses for block ${block.hash}: ${error}`);
                    continue;
                }

                const blockAddressMatches = [];
                for (const blockAddress of blockAddresses) {
                    const match = addressMap.get(blockAddress.address);
                    if (match) {
                        blockAddressMatches.push({
                            ...blockAddress,
                            matchingAddressesToWatch: [match],
                        });
                    }
                }

                if (blockAddressMatches.length > 0) {
                    const txOps = [];

                    for (const blockAddress of blockAddressMatches) {
                        const addressConnects = blockAddress.matchingAddressesToWatch.map((match: any) => ({ id: match.id }));
                        for (const tx of blockAddress.transactions) {
                            try {
                                const cbor = await miniBlockfrost.fetchTxCbor(tx.tx_hash);

                                for (const match of blockAddress.matchingAddressesToWatch) {

                                    txOps.push(prismaClient.transaction.upsert({
                                        where: { txHash: tx.tx_hash },
                                        update: {
                                            addresses: {
                                                connect: addressConnects
                                            }
                                        },
                                        create: {
                                            txHash: tx.tx_hash,
                                            cbor: cbor.cbor,
                                            addresses: {
                                                connect: addressConnects
                                            },
                                            BlockHash: block.hash,
                                            BlockSlot: block.slot,
                                        }
                                    }));
                                }
                            } catch (error) {
                                console.log(`Failed to fetch transaction ${tx.tx_hash} for block ${block.hash}: ${error}`);
                                continue;
                            }
                        }
                    }

                    txOps.push(
                        prismaClient.transactionSyncTip.upsert({
                            where: { id: 1 },
                            update: {
                                slot: block.slot,
                                blockHash: block.hash,
                            },
                            create: {
                                id: 1,
                                slot: block.slot,
                                blockHash: block.hash,
                            }
                        })
                    );

                    try {
                        await prismaClient.$transaction(txOps);
                        console.log(`✨ Found and synced transactions in slot: ${block.slot}`);
                    } catch (error) {
                        console.log(`Failed to batch update for block ${block.hash}: ${error}`);
                    }

                    if (block.slot <= addressToWatchSyncTip.slot) {
                        transactionSyncTip = { id: 1, slot: block.slot, blockHash: block.hash };
                    }

                }
            }

            blockHash = nextBlocks[nextBlocks.length - 1].hash;
            nextBlocks = await miniBlockfrost.fetchNextBlocks(blockHash);
            i++;
        }

    } catch (error) {
        console.log(`Unexpected error during syncTxs: ${error}`);
    } finally {
        await prismaClient.$disconnect();
    }
}
