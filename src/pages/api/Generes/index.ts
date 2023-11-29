import { NextApiRequest, NextApiResponse } from 'next';
import { postGeneres } from '../Controllers/Generes/postGeneres';
import { allGeneres } from '../Controllers/Generes/AllGeneres';
interface ErrorResponse {
    error: string;
}
  

const handleRequest = async (req: NextApiRequest, res: NextApiResponse, method: string | undefined) => {
  try {
    switch (method) {
      case 'POST':
        const data = req.body
        const response = await postGeneres(data);
        return res.status(200).json(response);
        case 'GET':
            const generes =await allGeneres()
            return res.status(200).json( generes);
  
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
