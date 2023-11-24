import { Role } from "@prisma/client";

export interface Manga {
    id: number;
    tittle: string;
    author: string;
    genre: string;
    description: string;
    // Otros campos relevantes para un manga

}

export interface User {
   
    name: string
    email:string
    password:string
    role: Role;
}

 
