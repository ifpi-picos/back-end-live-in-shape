-- CreateTable
CREATE TABLE "medidas" (
    "id" SERIAL NOT NULL,
    "peso" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "quadril" TEXT NOT NULL,
    "cintura" TEXT NOT NULL,
    "ombro" TEXT NOT NULL,
    "envergadura" TEXT NOT NULL,

    CONSTRAINT "medidas_pkey" PRIMARY KEY ("id")
);
