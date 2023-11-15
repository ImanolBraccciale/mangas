import { NextApiRequest, NextApiResponse } from 'next';
import { postChapter } from '../Controllers/Chapter/postChapter';
import { chapterID } from '../Controllers/Chapter/chapterID';
import { nextChapter } from '../Controllers/Chapter/nextChapter';
import { patchChapter } from '../Controllers/Chapter/patchChapter';
interface ErrorResponse {
    error: string;
}
 
const handleRequest = async (req: NextApiRequest, res: NextApiResponse, method: string | undefined) => {
    try {
        let data;
        let response;
        switch (method) {
            case 'POST':

                data = req.body
                response = await postChapter(data)
                return res.status(200).json(response)

            case 'GET':
                if (req.query.id) {
                    data = req.query.id as string
                    response= await chapterID(data)     
                }else if(req.query.currentChapter){
                    data = req.query.currentChapter  as string
                    response= await nextChapter(data)  
                }
                return res.status(200).json(response)
            case 'PATCH':
            // Lógica para el método PATCH
                data=req.body
                response= await patchChapter(data)
         
            case 'DELETE':
            // Lógica para el método DELETE
            return res.status(200).json(response)
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
