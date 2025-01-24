-- CreateTable
CREATE TABLE "Dica" (
    "id" SERIAL NOT NULL,
    "topico" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dica_pkey" PRIMARY KEY ("id")
);
