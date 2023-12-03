import { NextApiRequest, NextApiResponse } from "next";
import { messages } from "../../libs/messages";
import jwt,{ JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../../libs/prisma";

export const changePassword = async (req: NextApiRequest, res: NextApiResponse) => {
    const { password, confirmPassword } = req.body;
    try {
        
    
    if (!password || !confirmPassword) {
        return res.status(400).json({ error: messages.error.passwordEmpty });
    }

    const token = req.headers.token as string;

    if (!token) {
        return res.status(401).json({ error: messages.error.notAutorished });
    }

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT secret is not defined");
    }

    try {
        const isTokenValue= jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        const userEmail = isTokenValue.user.email;
        console.log(isTokenValue);
  

        const userFind = await prisma.user.findUnique({
            where: { email: userEmail },
        });
        
        if (!userFind) {
            return res.status(400).json({ error: messages.error.verifyEmail });
        }

        const hashedPassword = await bcrypt.hash(confirmPassword, 10);

        const update = await prisma.user.update({
            where: { ID_USER: userFind.ID_USER },
            data: { password: hashedPassword },
        });
       
        res.json({message:messages.succes.chagePassword})
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    } } catch (error) {
        return res.status(500).json({ error: "Something went wrongx2" });    
    }
};