/*
  Warnings:

  - You are about to drop the column `presenterId` on the `members` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_presenterId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "presenterId";

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_id_fkey" FOREIGN KEY ("id") REFERENCES "presenters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
