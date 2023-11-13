import { prisma } from "../../libs/prisma";

export const mangaUpdate = async (req:any) => {
    try {
        const update= req.body 
        const mangaId = req.query.ID_Manga as string;
        const existingManga = await prisma.manga.findUnique({
            where: { ID_Manga: mangaId },
        });
        const mangaUpdate = prisma.manga.update({
            where: { ID_Manga: mangaId },
            data: {
                ...existingManga,
                ...update
            }
        })
        return mangaUpdate;
    } catch (error: any) {
        throw new Error('Failed to search mangaUpdate');
    }

}