/*
  Warnings:

  - You are about to drop the column `cpfPro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `emailPro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nascimentoPro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nomePro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `senhaPro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `sobreNomePro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `telefonePro` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `sobreNome` on the `profissionais` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `profissionais` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefone]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpfPro]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefonePro]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailPro]` on the table `profissionais` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nascimento` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobreNome` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfPro` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailPro` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nascimentoPro` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomePro` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senhaPro` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobreNomePro` to the `profissionais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefonePro` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clientes_cpfPro_key";

-- DropIndex
DROP INDEX "clientes_emailPro_key";

-- DropIndex
DROP INDEX "clientes_telefonePro_key";

-- DropIndex
DROP INDEX "profissionais_cpf_key";

-- DropIndex
DROP INDEX "profissionais_email_key";

-- DropIndex
DROP INDEX "profissionais_telefone_key";

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "cpfPro",
DROP COLUMN "emailPro",
DROP COLUMN "nascimentoPro",
DROP COLUMN "nomePro",
DROP COLUMN "senhaPro",
DROP COLUMN "sobreNomePro",
DROP COLUMN "telefonePro",
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nascimento" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL,
ADD COLUMN     "sobreNome" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profissionais" DROP COLUMN "cpf",
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
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_telefone_key" ON "clientes"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_cpfPro_key" ON "profissionais"("cpfPro");

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_telefonePro_key" ON "profissionais"("telefonePro");

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_emailPro_key" ON "profissionais"("emailPro");
