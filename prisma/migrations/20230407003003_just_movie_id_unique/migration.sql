/*
  Warnings:

  - A unique constraint covering the columns `[movieId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Favorite_movieId_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_movieId_key" ON "Favorite"("movieId");
