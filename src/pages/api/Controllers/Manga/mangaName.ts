import { prisma } from "../../libs/prisma";

export const mangaName = async(tittle:string)=>{
    try {
        const mangaTittle = await prisma.manga.findMany(
            {where:
                {tittle:{startsWith:tittle}},
                orderBy: {
                  tittle: 'asc',
                },
        }
            )
        return mangaTittle;

    } catch (error:any) {
        throw new Error('Failed to search mangaName');
    }

}