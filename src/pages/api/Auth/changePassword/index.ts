import { NextApiRequest, NextApiResponse } from 'next';
 import { changePassword } from '../../Controllers/changePassword/changePassword';
 

interface ErrorResponse {
  error: string;
}

type ResponseData = {
  data: string;
};

const handleRequest = async (req: NextApiRequest, res: NextApiResponse, method: string | undefined) => {
  let response;
  try {
    switch (method) {
      case 'POST':
     
        response = await changePassword(req,res)
        return res.status(200).json(response);
      
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
