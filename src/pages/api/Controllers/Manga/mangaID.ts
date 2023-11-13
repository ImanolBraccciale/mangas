import { prisma } from "../../libs/prisma";

export const mangaID = async(id:string)=>{
    try {
        const mangaID = await prisma.manga.findUnique({where:{ID_Manga:id}})
        return mangaID
    } catch (error:any) {
        throw new Error('Failed to search allMangas');
    }

}