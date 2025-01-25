/*
  Warnings:

  - You are about to drop the `Dica` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Dica";

-- CreateTable
CREATE TABLE "dicas" (
    "id" SERIAL NOT NULL,
    "topico" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dicas_pkey" PRIMARY KEY ("id")
);
