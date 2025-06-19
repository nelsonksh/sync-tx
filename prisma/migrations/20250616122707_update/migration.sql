/*
  Warnings:

  - You are about to drop the `Script` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Script" DROP CONSTRAINT "Script_instancePolicyId_fkey";

-- DropTable
DROP TABLE "Script";

-- CreateTable
CREATE TABLE "Instance" (
    "id" SERIAL NOT NULL,
    "type" "ScriptType" NOT NULL,
    "cbor" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "instancePolicyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Instance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instance_cbor_key" ON "Instance"("cbor");

-- CreateIndex
CREATE UNIQUE INDEX "Instance_hash_key" ON "Instance"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "Instance_address_key" ON "Instance"("address");

-- CreateIndex
CREATE INDEX "Instance_type_idx" ON "Instance"("type");

-- AddForeignKey
ALTER TABLE "Instance" ADD CONSTRAINT "Instance_instancePolicyId_fkey" FOREIGN KEY ("instancePolicyId") REFERENCES "InstancePolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
