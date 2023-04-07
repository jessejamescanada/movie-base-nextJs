/*
  Warnings:

  - A unique constraint covering the columns `[movieId,userId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - Made the column `movieId` on table `Favorite` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Favorite_movieId_key";

-- AlterTable
ALTER TABLE "Favorite" ALTER COLUMN "movieId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_movieId_userId_key" ON "Favorite"("movieId", "userId");
