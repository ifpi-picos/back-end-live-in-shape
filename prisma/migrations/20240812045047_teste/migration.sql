/*
  Warnings:

  - You are about to drop the `medidas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "medidas";

-- CreateTable
CREATE TABLE "Disponibilidade" (
    "id" SERIAL NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFim" TEXT NOT NULL,

    CONSTRAINT "Disponibilidade_pkey" PRIMARY KEY ("id")
);
