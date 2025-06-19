/*
  Warnings:

  - You are about to drop the `AddressToWatch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AddressToWatchSyncTip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MultiAsset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TransactionSyncTip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utxo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AddressToWatchToTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ScriptType" AS ENUM ('ModuleScripts', 'CourseStateScripts', 'AssignmentValidator', 'TreasuryScripts', 'TreasuryToken', 'Escrow1', 'ContributorStateScripts', 'Unspecified');

-- DropForeignKey
ALTER TABLE "MultiAsset" DROP CONSTRAINT "MultiAsset_utxoId_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToWatchToTransaction" DROP CONSTRAINT "_AddressToWatchToTransaction_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddressToWatchToTransaction" DROP CONSTRAINT "_AddressToWatchToTransaction_B_fkey";

-- DropTable
DROP TABLE "AddressToWatch";

-- DropTable
DROP TABLE "AddressToWatchSyncTip";

-- DropTable
DROP TABLE "MultiAsset";

-- DropTable
DROP TABLE "Transaction";

-- DropTable
DROP TABLE "TransactionSyncTip";

-- DropTable
DROP TABLE "Utxo";

-- DropTable
DROP TABLE "_AddressToWatchToTransaction";

-- DropEnum
DROP TYPE "LocalStateType";

-- CreateTable
CREATE TABLE "InstancePolicy" (
    "id" SERIAL NOT NULL,
    "policyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InstancePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Script" (
    "id" SERIAL NOT NULL,
    "type" "ScriptType" NOT NULL,
    "cbor" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "instancePolicyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Script_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InstancePolicy_policyId_key" ON "InstancePolicy"("policyId");

-- CreateIndex
CREATE UNIQUE INDEX "Script_cbor_key" ON "Script"("cbor");

-- CreateIndex
CREATE UNIQUE INDEX "Script_hash_key" ON "Script"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "Script_address_key" ON "Script"("address");

-- CreateIndex
CREATE INDEX "Script_type_idx" ON "Script"("type");

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_instancePolicyId_fkey" FOREIGN KEY ("instancePolicyId") REFERENCES "InstancePolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
