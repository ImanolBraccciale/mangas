import { prisma } from "../../libs/prisma";

export const postGeneres = async (data: any) => {

    try {
        const generes = prisma.generes.create({ data
        })
    
        

    } catch (error) {
        throw new Error(`Failed to create generes ${error}`);
    }
}