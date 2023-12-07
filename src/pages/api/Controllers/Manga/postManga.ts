import { prisma } from "../../libs/prisma";

interface data {
  tittle: string;
  description: string;
  status: 'ACTIVE' | 'ABANDONED' | 'HIATUS' | 'SOON';
  ID_USER: string
  ID_Generes: string[] 
}

export const postManga = async (data: data) => {
  try {
    const { tittle, description, status, ID_USER, ID_Generes } = data;
    
    
    const mangaCreated = await prisma?.manga.create({
      data: {
        tittle: tittle,
        description: description,
        status: status,
        creator: {
          connect: {
            ID_USER,
          },
        },
        generes: {
          connect: ID_Generes.map((id) => ({
            ID_Generes: id,
          })),
        },
      },
    });
    return mangaCreated;
  } catch (error) {
    throw new Error('Failed to create Manga');
  }
}