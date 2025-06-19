import { bytesToHex, toBytes } from "@meshsdk/common";
import { deserializeAddress, serialzeAddress } from "@meshsdk/core-cst";
import { toAddress } from "@meshsdk/core-cst";
import { CardanoWatchClient, CardanoSyncClient } from "@utxorpc/sdk";

import { pubKeyAddress, serializeAddressObj } from "@meshsdk/core";



export async function watchForAddress(address: string): Promise<void> {
    console.log(`🔍 Watching for transactions on address: ${address}`);

    // const paymentPartHash = deserializeAddress(address).getProps().paymentPart?.hash as string

    // const _pubKeyAddress = pubKeyAddress(
    //     paymentPartHash,
    // );

    // const paymentPart = serializeAddressObj(_pubKeyAddress, 0);

    // const paymentPartHex = toBytes(paymentPart);


    const addressBytes = toBytes(toAddress(address).toBytes());

    const watchClient = new CardanoWatchClient({
        uri: "http://34.46.94.3:50051"
    })

    try {
        // console.log(`Watching for address: ${addressBytes}`);

        let tx = watchClient.watchTxByMatch(
            {
                hasAddress: {
                    delegationPart: Buffer.from(
       "96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b44",
       "hex"
     )
                }
            },
//             // [
//             //     {
//             //         hash: "67dafff2881c00d2139aabe5e488365ea59850bcce97e217e236bb579b2c88c2",
//             //         slot: 82399298,
//             //     }
//             // ]
[
                {
                    hash: "e78c93b9eb2bd312c49f464cf2aa0564405f3ab1408f525c6f3ada5b1c43992b",
                    slot: 29883443,
                }
            ]
        );


        // let tx = watchClient.watchTx(
        //     [
        //         {
        //             hash: "67dafff2881c00d2139aabe5e488365ea59850bcce97e217e236bb579b2c88c2",
        //             slot: 82399298,
        //         }
        //     ]
        // );



    //     let tx = watchClient.watchTxForAddress(
    //         Buffer.from(
    //    "00db57fe4a3fa6c233f022ab3ce0ceb3aa8a73978384581cbe15087c4d5457930eab449514cd82298e54178304feaa48f8df0fabd0f245d33d",
    //    "hex"
    //  )
    //     ,
    //         [
    //             {
    //                 hash: "bfd7671b68eada4d3a05ffb6b760d193ed7f30201d41d95286db414f44648c0e",
    //                 slot: 93036974,
    //             }
    //         ]
    //     );

        // let tx = watchClient.watchTxForPaymentPart(paymentPartHex,
        //     [
        //         {
        //             hash: "e8160a25b8e9f90493c75611b15d2fd60504405b3d81b430d15d9a80512e3614",
        //             slot: "82399376",
        //         }
        //     ]
        // )

        // let tx = watchClient.watchTxByMatch({

        // },
        //     [
        //         {
        //             hash: "e8160a25b8e9f90493c75611b15d2fd60504405b3d81b430d15d9a80512e3614",
        //             slot: "82399376",
        //         }
        //     ]
        // )

        // // ⏳ Heartbeat log every 10 seconds
        // const heartbeat = setInterval(() => {
        //     console.log(`[${new Date().toISOString()}] Still watching for transactions on ${address}...`);
        // }, 10_000);

        for await (const event of tx) {
            console.log(`Transaction for address ${address} detected:`, bytesToHex(event.Tx!.hash));
        }
    } catch (error) {
        console.error(`Failed to watch address ${address}:`, error);
    }


}