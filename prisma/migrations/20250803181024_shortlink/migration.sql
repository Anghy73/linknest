/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl,guestId]` on the table `ShortLink` will be added. If there are existing duplicate values, this will fail.
  - Made the column `guestId` on table `Link` required. This step will fail if there are existing NULL values in that column.
  - Made the column `guestId` on table `LinkTag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `guestId` on table `ShortLink` required. This step will fail if there are existing NULL values in that column.
  - Made the column `guestId` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "ShortLink_shortUrl_key";

-- DropIndex
DROP INDEX "ShortLink_url_key";

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "guestId" SET NOT NULL;

-- AlterTable
ALTER TABLE "LinkTag" ALTER COLUMN "guestId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ShortLink" ALTER COLUMN "guestId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "guestId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_shortUrl_guestId_key" ON "ShortLink"("shortUrl", "guestId");
