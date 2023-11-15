import { prisma } from "../../libs/prisma";

export const nextChapter = async (currentChapterId: string) => {
  try {
    const currentChapter = await prisma.chapter.findUnique({
      where: {
        ID_Chapter: currentChapterId,
      },
    });

    if (!currentChapter) {
      throw new Error(`Chapter not found with ID: ${currentChapterId}`);
    }

    const nextChapter = await prisma.chapter.findFirst({
      where: {
        ID_Manga: currentChapter.ID_Manga,
        Number: { gt: currentChapter.Number },
      },
      orderBy: { Number: 'asc' },
    });

    return nextChapter;
  } catch (error) {
    throw new Error(`Failed to find nextChapter ${error}`);
  }
}