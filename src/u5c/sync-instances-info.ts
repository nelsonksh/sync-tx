import { sdk } from "../utils/sdk";
import { PrismaClient, ScriptCategory } from "../../prisma/generated/client";
import { bytesToHex } from "@meshsdk/common";
import { deserializePlutusScript } from "@meshsdk/core-csl";
import { serializePlutusScript } from "@meshsdk/core";
import andamioConfig from "../config/andamio-config-preprod.json";
import { Network, NetworkId } from "../types/network";
import cbor from "cbor";

// ✅ Automatically use all enum values from Prisma
const instanceFilters = Object.values(ScriptCategory);

function extractBoundedBytesHex(plutusData: any): string {
    if (plutusData?.case === "boundedBytes" && plutusData.value instanceof Uint8Array) {
        return bytesToHex(plutusData.value);
    }
    throw new Error("Expected boundedBytes in plutusData");
}

function processScript(script: Uint8Array): { hash: string; address: string } {
    const cborHex = bytesToHex(script);
    const doubleEncoded = cbor.encode(Buffer.from(cborHex, "hex")).toString("hex");
    const hash = deserializePlutusScript(doubleEncoded, "V3").hash().to_hex();

    const { address } = serializePlutusScript(
        { code: doubleEncoded, version: "V3" },
        andamioConfig.stakingSH,
        NetworkId,
        true
    );

    return { hash, address };
}

export async function SyncInstancesInfo(prisma: PrismaClient): Promise<void> {
    try {
        const existingHashes = new Set(
            (await prisma.instance.findMany({ select: { hash: true } }))
                .map(({ hash }) => hash)
        );

        for (const type of instanceFilters) {
            console.log(`Syncing instances of type: ${type}`);
            const utxos = await sdk.provider.core.network.instance.getUtxos(undefined, type);

            console.log("a")

            for (const utxo of utxos) {
                            console.log("a")

                try {
                    const plutusData = utxo.parsedValued?.datum?.payload?.plutusData;
                    const script = utxo.parsedValued?.script?.script.value as Uint8Array;

                    const instancePolicy = extractBoundedBytesHex(plutusData);
                    const { hash, address } = processScript(script);

                    if (existingHashes.has(hash)) {
                        console.log(`Skipping: ${hash}`);
                        continue;
                    }

                    await prisma.instance.create({
                        data: {
                            type,
                            hash,
                            address,
                            instancePolicy: {
                                connectOrCreate: {
                                    where: { policyId: instancePolicy },
                                    create: { policyId: instancePolicy },
                                },
                            },
                        },
                    });

                    existingHashes.add(hash);
                    console.log(`Created instance: ${hash}`);
                } catch (err) {
                    console.error(`UTXO error (${type}):`, err);
                }
            }
        }
    } catch (err) {
        console.error("SyncInstancesInfo error:", err);
    }
}
