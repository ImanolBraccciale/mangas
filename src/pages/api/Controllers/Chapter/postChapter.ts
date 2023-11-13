import { prisma } from "../../libs/prisma";

export const postChapter = async (data: any) => {
    const { Number, tittle, images, Manga } = data
    console.log(Number);
    
    try {
        const newChapter = await prisma.chapter.create({data: {
            Number,
            tittle,
            images: images.map((url: string) => url),
            Manga: {
              connect: {
                ID_Manga: Manga
              }
            }
          }})
        return newChapter

    } catch (error) {
        throw new Error(`Failed to create Chapter ${error}`);
    }
}