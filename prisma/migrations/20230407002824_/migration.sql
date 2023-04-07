/*
  Warnings:

  - A unique constraint covering the columns `[movieId,id]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favorite_movieId_id_key" ON "Favorite"("movieId", "id");
