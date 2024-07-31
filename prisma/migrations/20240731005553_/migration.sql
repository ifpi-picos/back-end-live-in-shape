/*
  Warnings:

  - You are about to drop the column `cpf` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `sobreNome` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `clientes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpfPro]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefonePro]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailPro]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpfPro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailPro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nascimentoPro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomePro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senhaPro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobreNomePro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefonePro` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clientes_cpf_key";

-- DropIndex
DROP INDEX "clientes_email_key";

-- DropIndex
DROP INDEX "clientes_telefone_key";

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "cpf",
DROP COLUMN "email",
DROP COLUMN "nascimento",
DROP COLUMN "nome",
DROP COLUMN "senha",
DROP COLUMN "sobreNome",
DROP COLUMN "telefone",
ADD COLUMN     "cpfPro" TEXT NOT NULL,
ADD COLUMN     "emailPro" TEXT NOT NULL,
ADD COLUMN     "nascimentoPro" TEXT NOT NULL,
ADD COLUMN     "nomePro" TEXT NOT NULL,
ADD COLUMN     "senhaPro" TEXT NOT NULL,
ADD COLUMN     "sobreNomePro" TEXT NOT NULL,
ADD COLUMN     "telefonePro" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpfPro_key" ON "clientes"("cpfPro");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_telefonePro_key" ON "clientes"("telefonePro");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_emailPro_key" ON "clientes"("emailPro");
