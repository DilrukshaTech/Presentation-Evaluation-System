/*
  Warnings:

  - You are about to drop the column `eventId` on the `session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `judges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_id` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "session" DROP CONSTRAINT "session_eventId_fkey";

-- AlterTable
ALTER TABLE "judges" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "session" DROP COLUMN "eventId",
ADD COLUMN     "event_id" INTEGER NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "session_name_key" ON "session"("name");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
