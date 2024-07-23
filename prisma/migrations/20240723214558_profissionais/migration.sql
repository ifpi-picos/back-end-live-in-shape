/*
  Warnings:

  - You are about to drop the column `anexe` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `biografia` on the `profissionais` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "anexe",
DROP COLUMN "biografia";
