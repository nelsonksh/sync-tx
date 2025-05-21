/*
  Warnings:

  - Added the required column `BlockHash` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BlockSlot` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddressToWatch" ADD COLUMN     "introducedAtBlockHash" TEXT,
ADD COLUMN     "introducedAtSlot" INTEGER;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "BlockHash" TEXT NOT NULL,
ADD COLUMN     "BlockSlot" INTEGER NOT NULL;
