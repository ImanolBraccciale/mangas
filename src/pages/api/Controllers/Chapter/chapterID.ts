import { prisma } from "../../libs/prisma";

export const chapterID = async (data: string) => {
    try {
        const chapterID = await prisma.chapter.findUnique({
            where: {
                ID_Chapter: data
            }
        })
        return chapterID;
    } catch (error) {
        throw new Error(`Failed to create Chapter ${error}`);
    }
}