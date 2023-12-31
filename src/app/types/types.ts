import { Role } from "@prisma/client";
import { Status } from "@prisma/client";

export interface Manga {
    tittle: string;
    author: string;
    description: string;
   status:Status

}

export interface User {
   
    name?: string
    email:string
    password:string
    confirmPassword?:string
    role: Role;
}

 
export interface Generes {
    name:string
    ID_Generes:string
}