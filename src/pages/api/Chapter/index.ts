import { NextApiRequest, NextApiResponse } from 'next';
import { postChapter } from '../Controllers/Chapter/postChapter';
interface ErrorResponse {
    error: string;
}

const handleRequest = async (req: NextApiRequest, res: NextApiResponse, method: string | undefined) => {
    try {
        let data;
        switch (method) {
            case 'POST':

                    data = req.body
                    const resPost = await postChapter(data)
                    return res.status(200).json(resPost)

            case 'GET':


            case 'PATCH':
            // Lógica para el método PATCH

            case 'DELETE':
            // Lógica para el método DELETE

            default:
                return res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error: any) {
        const typedError: ErrorResponse = { error: error.message || 'Unknown error' };
        return res.status(500).json(typedError);
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method } = req;
        return handleRequest(req, res, method);

    } catch (error: any) {
        const typedError: ErrorResponse = { error: error.message || 'Unknown error' };
        return res.status(501).json(typedError);
    }
}
