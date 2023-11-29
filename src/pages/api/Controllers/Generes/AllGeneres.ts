import { prisma } from "../../libs/prisma";

export const allGeneres = async () => {
    
    try {
       const generes = prisma.generes.findMany()
       return generes

    } catch (error) {
        throw new Error(`Failed to create generes ${error}`);
    }
}