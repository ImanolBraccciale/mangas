 import { prisma } from "../../libs/prisma";
 
interface data {
name:string
email:string
password:string
role:'USER'| 'MEMBER'| 'ADMIN'
}

export const postUser=async (data: data)=>{
try {
    const createUser =await  prisma.user.create({data})
    return createUser

} catch (error:any) {
    throw new Error('Failed to create User');
}
}