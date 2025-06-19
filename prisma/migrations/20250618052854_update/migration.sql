-- CreateEnum
CREATE TYPE "NetworkValidator" AS ENUM ('AliasIndexValidator', 'GlobalStateValidator', 'GovernanceValidator', 'InstanceValidator');

-- CreateEnum
CREATE TYPE "LocalStateValidator" AS ENUM ('ModuleScriptsValidator', 'CourseStateScriptsValidator', 'AssignmentValidator', 'TreasuryScriptsValidator', 'Escrow1Validator', 'ContributorStateScriptsValidator');

-- CreateTable
CREATE TABLE "NetworkTxCbor" (
    "id" SERIAL NOT NULL,
    "txHash" TEXT NOT NULL,
    "cbor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validator" "NetworkValidator" NOT NULL,

    CONSTRAINT "NetworkTxCbor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocalStateTxCbor" (
    "id" SERIAL NOT NULL,
    "txHash" TEXT NOT NULL,
    "cbor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localStatePolicy" TEXT NOT NULL,
    "validator" "LocalStateValidator" NOT NULL,

    CONSTRAINT "LocalStateTxCbor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDetails" (
    "id" SERIAL NOT NULL,
    "projectNftPolicy" TEXT NOT NULL,
    "TresuryTokenPolicy" TEXT NOT NULL,
    "TreasuryAddress" TEXT NOT NULL,
    "ContributorStateAddress" TEXT NOT NULL,
    "EscrowAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NetworkTxCbor_txHash_key" ON "NetworkTxCbor"("txHash");

-- CreateIndex
CREATE INDEX "NetworkTxCbor_txHash_idx" ON "NetworkTxCbor"("txHash");

-- CreateIndex
CREATE UNIQUE INDEX "LocalStateTxCbor_txHash_key" ON "LocalStateTxCbor"("txHash");

-- CreateIndex
CREATE INDEX "LocalStateTxCbor_txHash_idx" ON "LocalStateTxCbor"("txHash");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectDetails_projectNftPolicy_key" ON "ProjectDetails"("projectNftPolicy");

-- CreateIndex
CREATE INDEX "ProjectDetails_projectNftPolicy_idx" ON "ProjectDetails"("projectNftPolicy");
