/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl]` on the table `ShortLink` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ShortLink_shortUrl_guestId_key";

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_shortUrl_key" ON "ShortLink"("shortUrl");
