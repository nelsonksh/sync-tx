import { deserializeTx } from "@meshsdk/core-csl";
import {
    PrismaClient,
    ScriptCategory,
    NetworkValidator
} from "../../prisma/generated/client";
import { Transaction } from "../types/transaction";

type SaveUtxosArgs = {
    prisma: PrismaClient;
    tx: {
        txHash: string;
        cbor: string;
        BlockHash: string;
        BlockSlot: number;
    };
    validatorType: "network" | "localState";
    validator: NetworkValidator | ScriptCategory;
    localStatePolicy?: string; // Optional, used for local state transactions
};

export async function saveUtxos({ prisma, tx, validatorType, validator, localStatePolicy }: SaveUtxosArgs) {
    let createdUtxoCount = 0;
    let txCreatedCount = 0;

    try {
        const txJson = deserializeTx(tx.cbor).to_json();
        const txBody = JSON.parse(txJson) as Transaction;

        for (let index = 0; index < txBody.body.outputs.length; index++) {
            const output = txBody.body.outputs[index];

            try {
                // Create UTXO
                const utxo = await prisma.utxo.create({
                    data: {
                        address: output.address,
                        txHash: tx.txHash,
                        index,
                        coin: BigInt(output.amount.coin),
                        plutusData: output.plutus_data?.Data || null,
                        scriptRef: output.script_ref?.PlutusScript || null,
                    },
                });

                // Save MultiAssets
                if (output.amount.multiasset) {
                    for (const [policyId, assets] of Object.entries(output.amount.multiasset)) {
                        if (typeof assets === "object") {
                            for (const [assetName, quantity] of Object.entries(assets)) {
                                await prisma.multiAsset.create({
                                    data: {
                                        utxoId: utxo.id,
                                        policyId,
                                        assetName,
                                        quantity: BigInt(quantity as string),
                                    },
                                });
                            }
                        }
                    }
                }

                // Save output reference to either NetworkTxOutput or LocalStateTxOutput
                if (validatorType === "network") {
                    await prisma.networkTxOutput.create({
                        data: {
                            utxoId: utxo.id,
                            validator: validator as NetworkValidator,
                        },
                    });
                } else {
                    if (!localStatePolicy) {
                        throw new Error("localStatePolicy is required for local state transactions");
                    }
                    await prisma.localStateTxOutput.create({
                        data: {
                            utxoId: utxo.id,
                            validator: validator as ScriptCategory,
                            localStatePolicy: localStatePolicy
                        },
                    });
                }

                createdUtxoCount++;
                txCreatedCount++;
            } catch (error) {
                console.error(`⚠️ Failed to save UTXO for address ${output.address} in tx ${tx.txHash}:`, error);
            }
        }
    } catch (error) {
        console.error(`❌ Failed to deserialize or process tx ${tx.txHash}:`, error);
    }

    if (txCreatedCount > 0) {
        console.log(`✅ Tx ${tx.txHash}: created ${txCreatedCount} UTXO(s)`);
    }

    console.log(`🎉 Done with tx ${tx.txHash}. Total UTXOs created: ${createdUtxoCount}`);
}
