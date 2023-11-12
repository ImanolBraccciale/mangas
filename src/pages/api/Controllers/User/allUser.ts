import { prisma } from "../../libs/prisma";

interface FilterParams {
    id?:string
    name?: string;
    email?: string;
    role?: 'USER' | 'MEMBER' | 'ADMIN';
  }

export const allUser = async(params?:FilterParams)=>{
    try {
        const allUser = prisma.user.findMany({where:params})
        return allUser
    } catch (error:any) {
        throw new Error('Failed to search all User');
    }

}