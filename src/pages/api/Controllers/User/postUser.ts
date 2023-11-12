

interface data {
name:string
email:string
password:string
rol:'USER'| 'MEMBER'| 'ADMIN'
}

export const postUser=async (data: data)=>{
try {
    
    console.log(prisma.user);
    const createUser =await  prisma.user.create({data})
    return createUser

} catch (error:any) {
    throw new Error('Failed to create User');
}
}