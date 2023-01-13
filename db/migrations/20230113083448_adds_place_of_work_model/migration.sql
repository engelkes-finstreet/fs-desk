-- CreateTable
CREATE TABLE "PlaceOfWork" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "PlaceOfWork_pkey" PRIMARY KEY ("id")
);
