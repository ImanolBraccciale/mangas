import { NextApiResponse } from "next";
import { prisma } from "../../libs/prisma";
import { messages } from "../../libs/messages";
import jwt from "jsonwebtoken";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND);


export const forgetPassword = async (data: any, res: NextApiResponse) => {
    const userFind = await prisma.user.findUnique({
        where: { email: data.email },
    });

    if (!userFind) throw new Error(messages.error.verifyEmail);
    
    if (!process.env.JWT_SECRET) throw new Error('JWT secret is not defined');
    
    const TokenData = {
        email: userFind.email,
        id: userFind.ID_USER
    }
    const token = jwt.sign({ user: TokenData }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
  
    const forgetURL= `http://localhost:3000/changePassword?token=${token}`
    console.log(token);
    
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: userFind.email,
        subject: 'cambio de contraseña',
        html: `<a href=${forgetURL}>cambiar contraseña</a>`
      });
    return res.json({
        messages:messages.succes.resendSuccess
    })
}