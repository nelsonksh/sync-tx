-- CreateEnum
CREATE TYPE "LocalStateType" AS ENUM ('Unspecified', 'Course', 'Assignment', 'ModuleRef', 'Treasury', 'Escrow', 'ContributorState');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "txHash" TEXT NOT NULL,
    "cbor" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionSyncTip" (
    "id" SERIAL NOT NULL,
    "slot" INTEGER NOT NULL,
    "blockHash" TEXT NOT NULL,

    CONSTRAINT "TransactionSyncTip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddressToWatch" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" "LocalStateType",

    CONSTRAINT "AddressToWatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddressToWatchSyncTip" (
    "id" SERIAL NOT NULL,
    "slot" INTEGER NOT NULL,
    "blockHash" TEXT NOT NULL,

    CONSTRAINT "AddressToWatchSyncTip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AddressToWatchToTransaction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AddressToWatchToTransaction_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_txHash_key" ON "Transaction"("txHash");

-- CreateIndex
CREATE INDEX "Transaction_txHash_idx" ON "Transaction"("txHash");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionSyncTip_slot_key" ON "TransactionSyncTip"("slot");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionSyncTip_blockHash_key" ON "TransactionSyncTip"("blockHash");

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatch_value_key" ON "AddressToWatch"("value");

-- CreateIndex
CREATE INDEX "AddressToWatch_key_idx" ON "AddressToWatch"("key");

-- CreateIndex
CREATE INDEX "AddressToWatch_type_idx" ON "AddressToWatch"("type");

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatchSyncTip_slot_key" ON "AddressToWatchSyncTip"("slot");

-- CreateIndex
CREATE UNIQUE INDEX "AddressToWatchSyncTip_blockHash_key" ON "AddressToWatchSyncTip"("blockHash");

-- CreateIndex
CREATE INDEX "_AddressToWatchToTransaction_B_index" ON "_AddressToWatchToTransaction"("B");

-- AddForeignKey
ALTER TABLE "_AddressToWatchToTransaction" ADD CONSTRAINT "_AddressToWatchToTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "AddressToWatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToWatchToTransaction" ADD CONSTRAINT "_AddressToWatchToTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
