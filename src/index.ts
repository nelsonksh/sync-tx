require('dotenv').config()

import { PrismaClient } from '../prisma/generated/client';
import { syncInstanceAddresses } from './sync/sync-instance-addresses';
import { MiniBlockfrost } from './mini-bf';
import andamioConfig from "./config/andamio-config-preprod.json"
import { syncTxs } from './sync/sync-txs';
import { syncUtxos } from './sync/sync-utxos';

async function main() {
    const miniBlockfrost = new MiniBlockfrost(process.env.DOLOS_MINI_BLOCKFROST || "http://localhost:50051")

    await syncInstanceAddresses(miniBlockfrost, "Preprod", andamioConfig)

    await syncTxs(miniBlockfrost)

}

main();