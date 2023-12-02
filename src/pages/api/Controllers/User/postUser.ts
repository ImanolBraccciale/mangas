import { NextApiResponse } from "next";
import { messages } from "../../libs/messages";
import { prisma } from "../../libs/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface Data {
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'MEMBER' | 'ADMIN';
}

export const postUser = async (data: Data, res: NextApiResponse) => {
  try {
    const { password } = data;

    const userFind = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userFind) {
      throw new Error(messages.error.verifyEmail);
    }
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret is not defined');
      }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    };

    const createUser = await prisma.user.create({ data: newUser });

    const { password: _unused, ...userWithoutPassword } = createUser;

    const token = jwt.sign({ user: createUser }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.setHeader("Set-Cookie", `auth_cookies=${token}; Secure; SameSite=Strict; Max-Age=86400; Path=/`);

    return res.status(200).json({
      user: userWithoutPassword,
      message: messages.succes.postUser,
    });
  } catch (error: any) {
    console.error(error);
    throw new Error('Failed to create User');
  }
};