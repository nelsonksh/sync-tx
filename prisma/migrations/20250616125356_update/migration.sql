/*
  Warnings:

  - You are about to drop the column `cbor` on the `Instance` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Instance_cbor_key";

-- AlterTable
ALTER TABLE "Instance" DROP COLUMN "cbor";
