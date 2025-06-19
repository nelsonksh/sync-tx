/*
  Warnings:

  - Changed the type of `type` on the `Instance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `validator` on the `LocalStateTxCbor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `validator` on the `LocalStateTxOutput` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ScriptCategory" AS ENUM ('ModuleScripts', 'CourseStateScripts', 'AssignmentValidator', 'TreasuryScripts', 'TreasuryToken', 'Escrow1', 'ContributorStateScripts');

-- AlterTable
ALTER TABLE "Instance" DROP COLUMN "type",
ADD COLUMN     "type" "ScriptCategory" NOT NULL;

-- AlterTable
ALTER TABLE "LocalStateTxCbor" DROP COLUMN "validator",
ADD COLUMN     "validator" "ScriptCategory" NOT NULL;

-- AlterTable
ALTER TABLE "LocalStateTxOutput" DROP COLUMN "validator",
ADD COLUMN     "validator" "ScriptCategory" NOT NULL;

-- DropEnum
DROP TYPE "LocalStateValidator";

-- DropEnum
DROP TYPE "ScriptType";

-- CreateIndex
CREATE INDEX "Instance_type_idx" ON "Instance"("type");

-- CreateIndex
CREATE INDEX "LocalStateTxOutput_localStatePolicy_validator_idx" ON "LocalStateTxOutput"("localStatePolicy", "validator");
