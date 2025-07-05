/*
  Warnings:

  - You are about to drop the column `phone` on the `judges` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[passwordId]` on the table `judges` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `passwordId` to the `judges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "judges" DROP COLUMN "phone",
ADD COLUMN     "passwordId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "judges_passwordId_key" ON "judges"("passwordId");
