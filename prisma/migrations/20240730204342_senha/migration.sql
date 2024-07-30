/*
  Warnings:

  - You are about to drop the column `senhaPro` on the `profissionais` table. All the data in the column will be lost.
  - Added the required column `senha` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "senhaPro",
ADD COLUMN     "senha" TEXT NOT NULL;
