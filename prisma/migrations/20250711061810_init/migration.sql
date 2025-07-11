/*
  Warnings:

  - The `memberId` column on the `presenters` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "presenters" DROP CONSTRAINT "presenters_memberId_fkey";

-- AlterTable
ALTER TABLE "presenters" ALTER COLUMN "marks" DROP NOT NULL,
DROP COLUMN "memberId",
ADD COLUMN     "memberId" INTEGER[];

-- AddForeignKey
ALTER TABLE "presenters" ADD CONSTRAINT "presenters_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
