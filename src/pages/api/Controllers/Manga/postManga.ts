import { prisma } from "../../libs/prisma";

interface data {
    tittle: string;
  description: string;
  status: 'ACTIVE' | 'ABANDONED' | 'HIATUS' | 'SOON';
  ID_USER:string
}

export const postManga=async (data: data)=>{
try {
    const { tittle, description, status, ID_USER } = data;
    
    const mangaCreated =await prisma?.manga.create({
        data:{       
            tittle: tittle,
            description: description,
            status: status,
            creator: {
                connect: {
                  ID_USER,
                },
              },
        }
    })
    return mangaCreated
    
} catch (error) {
    throw new Error('Failed to create Manga');
}
}