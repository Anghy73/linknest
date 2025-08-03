-- CreateTable
CREATE TABLE "ShortLink" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShortLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_url_key" ON "ShortLink"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_shortUrl_key" ON "ShortLink"("shortUrl");
