import { NextApiResponse } from "next";
import { prisma } from "../../libs/prisma";

export const login = async(data:any, res:NextApiResponse)=>{
    try {
   
      
    } catch (error:any) {
        throw new Error('Failed to search all User');
    }

}