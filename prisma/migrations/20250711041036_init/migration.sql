-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_presenterId_fkey";

-- AlterTable
ALTER TABLE "members" ALTER COLUMN "presenterId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_presenterId_fkey" FOREIGN KEY ("presenterId") REFERENCES "presenters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
