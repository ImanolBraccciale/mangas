import { prisma } from "../../libs/prisma";

export const allMangas = async()=>{
    try {
        const allMangas = prisma.manga.findMany({
            include: {
              generes: { select: {
                name: true,
              }},
            },
          })
        return allMangas
    } catch (error:any) {
        throw new Error('Failed to search allMangas');
    }

}