import { prisma } from "../../libs/prisma";

export const userID=async (req:any)=>{
    try {
        const id=req.query.ID_USER;
        const searchUser= await prisma.user.findUnique({where:{ID_USER:id}})
        return searchUser
    
    } catch (error:any) {
        throw new Error('Failed to create User',error);
    }
    }