import { prisma } from "../../libs/prisma";

export const patchChapter = async (data:any) => {
  try {
 
    const existingManga = await prisma.manga.findUnique({
        where: { ID_Manga: data.mangaId },
    });
    const mangaUpdate = prisma.manga.update({
        where: { ID_Manga: data.mangaId },
        data: {
            ...existingManga,
            ...data
        }
    })
    return mangaUpdate;
  } catch (error) {
    throw new Error(`Failed to find patchChapter ${error}`);
  }
}