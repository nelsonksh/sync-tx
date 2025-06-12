require('dotenv').config()

import { PrismaClient } from '../prisma/generated/client';
import { syncInstanceAddresses } from './sync/sync-instance-addresses';
import { MiniBlockfrost } from './mini-bf';
import andamioConfig from "./config/andamio-config-preprod.json"
import { syncTxs } from './sync/sync-txs';
import { syncUtxos } from './sync/sync-utxos';

const miniBlockfrost = new MiniBlockfrost(process.env.DOLOS_MINI_BLOCKFROST || "http://localhost:50051");

async function main() {
    while (true) {
        try {
            console.log("Starting sync...");
            await syncInstanceAddresses(miniBlockfrost, "Preprod", andamioConfig);
            await syncTxs(miniBlockfrost);
            console.log("Sync complete. Sleeping...");
            await new Promise(resolve => setTimeout(resolve, 60000));
        } catch (error) {
            console.error("Error in sync loop:", error);
            await new Promise(resolve => setTimeout(resolve, 15000)); // backoff
        }
    }
}

process.on('SIGINT', async () => {
    console.log("Shutting down gracefully...");
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log("Shutting down gracefully...");
    process.exit(0);
});


main();