/*
  Warnings:

  - The values [Unspecified] on the enum `ScriptType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ScriptType_new" AS ENUM ('ModuleScripts', 'CourseStateScripts', 'AssignmentValidator', 'TreasuryScripts', 'TreasuryToken', 'Escrow1', 'ContributorStateScripts');
ALTER TABLE "Script" ALTER COLUMN "type" TYPE "ScriptType_new" USING ("type"::text::"ScriptType_new");
ALTER TYPE "ScriptType" RENAME TO "ScriptType_old";
ALTER TYPE "ScriptType_new" RENAME TO "ScriptType";
DROP TYPE "ScriptType_old";
COMMIT;
