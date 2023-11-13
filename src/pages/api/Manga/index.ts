import { NextApiRequest, NextApiResponse } from 'next';
import { postManga } from '../Controllers/Manga/postManga';
import { allMangas } from '../Controllers/Manga/mangas';
import { mangaID } from '../Controllers/Manga/mangaID';
import { mangaName } from '../Controllers/Manga/mangaName';
import { mangaUpdate } from '../Controllers/Manga/patchManga';

interface ErrorResponse {
  error: string;
}

const handleRequest = async (req: NextApiRequest, res: NextApiResponse, method: string | undefined) => {
  try {
    switch (method) {
      case 'POST':
     
        const response = await postManga(req.body);
        return res.status(200).json(response);

      case 'GET':
        let mangas;
        const id = req.query.id as string
        const tittle = req.query.tittle as string
        if (id) 
        {
          mangas = await mangaID(id)
        }else if(tittle){
          mangas = await mangaName(tittle)
        }else {
          mangas = await allMangas()
        }
        return res.status(200).json(mangas)

      case 'PATCH':
        // Lógica para el método PATCH
        
        const resUpdate = await mangaUpdate(req)
        return res.status(200).json({ message: 'PATCH request handled successfully' });
      case 'DELETE':
        // Lógica para el método DELETE
        return res.status(200).json({ message: 'DELETE request handled successfully' });
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
