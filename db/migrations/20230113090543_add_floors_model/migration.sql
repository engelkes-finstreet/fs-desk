-- CreateTable
CREATE TABLE "Floor" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "placeOfWorkId" INTEGER NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Floor" ADD CONSTRAINT "Floor_placeOfWorkId_fkey" FOREIGN KEY ("placeOfWorkId") REFERENCES "PlaceOfWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
