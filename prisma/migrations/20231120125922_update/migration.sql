/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "usuarios";

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobreNome" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_telefone_key" ON "clientes"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
