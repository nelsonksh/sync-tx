-- CreateTable
CREATE TABLE "MultiAsset" (
    "id" SERIAL NOT NULL,
    "policyId" TEXT NOT NULL,
    "assetName" TEXT NOT NULL,
    "quantity" BIGINT NOT NULL,
    "utxoId" INTEGER,

    CONSTRAINT "MultiAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utxo" (
    "id" SERIAL NOT NULL,
    "txHash" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "plutusData" TEXT,
    "scriptRef" TEXT,
    "coin" BIGINT NOT NULL,

    CONSTRAINT "Utxo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MultiAsset_policyId_assetName_idx" ON "MultiAsset"("policyId", "assetName");

-- CreateIndex
CREATE INDEX "MultiAsset_policyId_idx" ON "MultiAsset"("policyId");

-- CreateIndex
CREATE INDEX "Utxo_address_idx" ON "Utxo"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Utxo_txHash_index_key" ON "Utxo"("txHash", "index");

-- AddForeignKey
ALTER TABLE "MultiAsset" ADD CONSTRAINT "MultiAsset_utxoId_fkey" FOREIGN KEY ("utxoId") REFERENCES "Utxo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
