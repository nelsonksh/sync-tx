import { bytesToHex } from "@meshsdk/common";
import { CardanoSyncClient } from "@utxorpc/sdk";

export async function FetchBlock() {
    const syncClient = new CardanoSyncClient({
        uri: "http://34.46.94.3:50051"
    })

    const block = await syncClient.fetchBlock({
        hash: "e8160a25b8e9f90493c75611b15d2fd60504405b3d81b430d15d9a80512e3614",
        slot: 82399376,
    })

    // block header
    console.log(`hash: ${bytesToHex(block.header!.hash)} \nslot: ${block.header!.slot} \nheight: ${block.header!.height} \n\n`);

    // block body
    console.log(`${JSON.stringify(block.body!.tx, null, 4)} \n\n`);
}