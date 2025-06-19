-- AlterTable
ALTER TABLE "ProjectDetails" ALTER COLUMN "TresuryTokenPolicy" DROP NOT NULL,
ALTER COLUMN "TreasuryAddress" DROP NOT NULL,
ALTER COLUMN "ContributorStateAddress" DROP NOT NULL,
ALTER COLUMN "EscrowAddress" DROP NOT NULL;
