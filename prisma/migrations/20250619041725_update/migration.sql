/*
  Warnings:

  - You are about to drop the column `TresuryTokenPolicy` on the `ProjectDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProjectDetails" DROP COLUMN "TresuryTokenPolicy",
ADD COLUMN     "TreasuryTokenPolicy" TEXT;
