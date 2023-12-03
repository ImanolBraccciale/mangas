import { NextApiRequest, NextApiResponse } from "next";
import { messages } from "../../libs/messages";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const Check = async (req: NextApiRequest, res: NextApiResponse) => {

    const token = req.headers.token as string;

    if (!token)   res.status(401).json({ error: messages.error.notAutorished });
    
    if (!process.env.JWT_SECRET) throw new Error("JWT secret is not defined");
    

    try {
        const isTokenValue = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        const userID = isTokenValue.user.id;
        
        const userFind = await prisma.user.findUnique({
            where: { ID_USER: userID },
        });

        if (!userFind) {
            return NextResponse.json(
                { message: messages.error.userNotFounded },
                { status: 400 }
            );
        }
        return res.json(
            { isAuthorized: true, message: messages.succes.Authorized }
        );

    } catch (error) {
        return messages.error.userNotFounded
    }
}