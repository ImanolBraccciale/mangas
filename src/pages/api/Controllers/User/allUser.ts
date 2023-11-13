import { prisma } from "../../libs/prisma";

export const allUser = async()=>{
    try {
        const allUser = prisma.user.findMany()
        return allUser
    } catch (error:any) {
        throw new Error('Failed to search all User');
    }

}