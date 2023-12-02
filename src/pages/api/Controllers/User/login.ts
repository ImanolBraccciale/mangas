import { NextApiResponse } from "next";
import { prisma } from "../../libs/prisma";
import { messages } from "../../libs/messages";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";

export const login = async (data: any, res: NextApiResponse) => {
  try {

    const userFind = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!userFind) {
      throw new Error(messages.error.verifyEmail);
    }
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT secret is not defined');
    }

    const isCorrect: boolean = await bcrypt.compare(
      data.password,
      userFind.password
    )
    if (!isCorrect) {
      return NextResponse.json(
        { message: messages.error.incorrectPassword },
        { status: 400 }
      );
    }

    const { password: _unused, ...userWithoutPassword } = userFind;

    const token = jwt.sign({ user: userWithoutPassword }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    
    res.setHeader("Set-Cookie", `auth_cookies=${token}; Secure; SameSite=Strict; Max-Age=86400; Path=/`);
    return res.status(200).json({
      user: userWithoutPassword,
      message: messages.succes.login,
    });

  } catch (error: any) {
    throw new Error('Failed to search all User');
  }

}