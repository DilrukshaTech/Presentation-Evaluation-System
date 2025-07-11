/*
  Warnings:

  - You are about to drop the column `presenterId` on the `members` table. All the data in the column will be lost.
  - Added the required column `memberId` to the `presenters` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_presenterId_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "presenterId",
ADD CONSTRAINT "members_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "presenters" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "presenters" ADD CONSTRAINT "presenters_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
