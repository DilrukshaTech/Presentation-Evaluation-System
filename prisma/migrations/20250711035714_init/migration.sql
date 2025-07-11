/*
  Warnings:

  - Added the required column `presenterId` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_id_fkey";

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "presenterId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_presenterId_fkey" FOREIGN KEY ("presenterId") REFERENCES "presenters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
