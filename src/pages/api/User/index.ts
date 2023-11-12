import { NextApiRequest, NextApiResponse } from 'next';
import { postUser } from '../Controllers//User/postUser';


interface ErrorResponse {
  error: string;
}

type ResponseData = {
  data: string;
};

const handleRequest = async (req: NextApiRequest, res: NextApiResponse, method: string | undefined) => {
  try {
    switch (method) {
      case 'POST':

        const data = req.body
        const response = await postUser(data);
        return res.status(200).json(response);
      case 'GET':

        return res.status(200).json({ message: 'GET request handled successfully' });
      case 'PATCH':
        // Lógica para el método PATCH
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
