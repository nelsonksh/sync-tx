import { deserializeTx } from "@meshsdk/core-csl";
import { PrismaClient } from "../prisma/generated/client";
import { Transaction } from "./transaction";

export async function syncUtxos() {
    const prisma = new PrismaClient();

    const txs = await prisma.transaction.findMany();
    const addressesToWatch = await prisma.addressToWatch.findMany();
    const watchedSet = new Set(addressesToWatch.map(a => a.value));

    let processedTxCount = 0;
    let createdUtxoCount = 0;

    console.log(`Starting UTXO sync... Total transactions: ${txs.length}, watched addresses: ${watchedSet.size}`);

    for (const tx of txs) {
        processedTxCount++;
        let txCreatedCount = 0;

        try {
            const txJson = deserializeTx(tx.cbor).to_json();
            const txBody = JSON.parse(txJson) as Transaction;

            for (let index = 0; index < txBody.body.outputs.length; index++) {
                const output = txBody.body.outputs[index];

                if (watchedSet.has(output.address)) {
                    try {
                        const utxo = await prisma.utxo.create({
                            data: {
                                address: output.address,
                                txHash: tx.txHash,
                                index: index,
                                coin: BigInt(output.amount.coin),
                                plutusData: output.plutus_data?.Data || null,
                                scriptRef: output.script_ref?.PlutusScript || null,
                            }
                        });

                        // Handle multiple multiassets separately
                        if (output.amount.multiasset) {
                            for (const [policyId, assets] of Object.entries(output.amount.multiasset)) {
                                if (typeof assets === 'object') {
                                    for (const [assetName, quantity] of Object.entries(assets)) {
                                        await prisma.multiAsset.create({
                                            data: {
                                                utxoId: utxo.id,
                                                policyId: policyId,
                                                assetName: assetName,
                                                quantity: BigInt(quantity as string),
                                            }
                                        });
                                    }
                                }
                            }
                        }
                        createdUtxoCount++;
                        txCreatedCount++;
                    } catch (error) {
                        console.error(`⚠️ Failed to create UTXO for address ${output.address} in tx ${tx.txHash}:`, error);
                    }
                }
            }
        } catch (error) {
            console.error(`❌ Failed to process transaction ${tx.txHash}:`, error);
        }

        // Log progress every 100 transactions
        if (processedTxCount % 100 === 0) {
            console.log(`Processed ${processedTxCount}/${txs.length} transactions. Total UTXOs created: ${createdUtxoCount}`);
        }

        // Optionally log if any UTXOs were created for this tx
        if (txCreatedCount > 0) {
            console.log(`✅ Tx ${tx.txHash}: created ${txCreatedCount} UTXO(s)`);
        }
    }

    console.log(`🎉 Done! Processed ${processedTxCount} transactions. Total UTXOs created: ${createdUtxoCount}`);
    await prisma.$disconnect();
}
