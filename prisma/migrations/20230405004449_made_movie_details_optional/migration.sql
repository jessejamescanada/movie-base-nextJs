-- AlterTable
ALTER TABLE "Favorite" ALTER COLUMN "movieImage" DROP NOT NULL,
ALTER COLUMN "movieOverview" DROP NOT NULL,
ALTER COLUMN "movieSimilar" DROP NOT NULL;
