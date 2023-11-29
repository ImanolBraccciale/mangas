-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'ABANDONED', 'HIATUS', 'SOON');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MEMBER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "ID_USER" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID_USER")
);

-- CreateTable
CREATE TABLE "Manga" (
    "ID_Manga" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'SOON',
    "ID_USER" TEXT NOT NULL,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("ID_Manga")
);

-- CreateTable
CREATE TABLE "Generes" (
    "ID_Generes" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Generes_pkey" PRIMARY KEY ("ID_Generes")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "ID_Chapter" TEXT NOT NULL,
    "Number" INTEGER NOT NULL,
    "tittle" TEXT,
    "images" TEXT[],
    "ID_Manga" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("ID_Chapter")
);

-- CreateTable
CREATE TABLE "_GeneresToManga" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ID_USER_key" ON "User"("ID_USER");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_ID_Manga_key" ON "Manga"("ID_Manga");

-- CreateIndex
CREATE UNIQUE INDEX "Generes_name_key" ON "Generes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GeneresToManga_AB_unique" ON "_GeneresToManga"("A", "B");

-- CreateIndex
CREATE INDEX "_GeneresToManga_B_index" ON "_GeneresToManga"("B");

-- AddForeignKey
ALTER TABLE "Manga" ADD CONSTRAINT "Manga_ID_USER_fkey" FOREIGN KEY ("ID_USER") REFERENCES "User"("ID_USER") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_ID_Manga_fkey" FOREIGN KEY ("ID_Manga") REFERENCES "Manga"("ID_Manga") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GeneresToManga" ADD CONSTRAINT "_GeneresToManga_A_fkey" FOREIGN KEY ("A") REFERENCES "Generes"("ID_Generes") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GeneresToManga" ADD CONSTRAINT "_GeneresToManga_B_fkey" FOREIGN KEY ("B") REFERENCES "Manga"("ID_Manga") ON DELETE CASCADE ON UPDATE CASCADE;
