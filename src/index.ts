require('dotenv').config();

import { PrismaClient } from '../prisma/generated/client';
import { syncTxs } from './mini-blockfrost/sync-txs';
import { SyncInstancesInfo } from './u5c/sync-instances-info';
import { SyncProjectsInfo } from './u5c/sync-projects-info';

const prisma = new PrismaClient();

async function main() {
    try {

        await SyncInstancesInfo(prisma);
        await SyncProjectsInfo(prisma);
        await syncTxs(prisma);

    } catch (error) {
        console.error("Error in main:", error);
    } finally {
        gracefulShutdown();
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function gracefulShutdown() {
    console.log("🛑 Shutting down gracefully...");
    prisma.$disconnect().then(() => process.exit(0));
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

main();
