import AndamioSDK from '@andamiojs/sdk';
import { PrismaClient } from '../prisma/generated/client';
import { syncInstanceAddresses } from './sync-instance-addresses';
import { MiniBlockfrost } from './mini-bf';
import andamioConfig from "./andamio-config-preprod.json"
import { syncTxs } from './sync-txs';

async function main() {
    const miniBlockfrost = new MiniBlockfrost("http://localhost:3000")

    await syncInstanceAddresses(miniBlockfrost, "Preprod", andamioConfig)

    await syncTxs(miniBlockfrost)
}

main();