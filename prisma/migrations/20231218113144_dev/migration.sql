/*
  Warnings:

  - Added the required column `senha` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "profissionais" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobreNome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "biografia" TEXT,
    "anexe" TEXT,
    "profissao" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "profissionais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_cpf_key" ON "profissionais"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_email_key" ON "profissionais"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profissionais_telefone_key" ON "profissionais"("telefone");
