/*
  Warnings:

  - You are about to drop the column `marks` on the `presenters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "presenters" DROP COLUMN "marks",
ADD COLUMN     "criteria" TEXT[];

-- CreateTable
CREATE TABLE "presenter_criteria" (
    "id" SERIAL NOT NULL,
    "presenterId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "marks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "presenter_criteria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "presenter_criteria_name_key" ON "presenter_criteria"("name");

-- AddForeignKey
ALTER TABLE "presenter_criteria" ADD CONSTRAINT "presenter_criteria_presenterId_fkey" FOREIGN KEY ("presenterId") REFERENCES "presenters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
