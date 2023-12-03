import { NextApiRequest, NextApiResponse } from 'next';
import { postUser } from '../../Controllers/User/postUser';
import { allUser } from '../../Controllers/User/allUser';
import { login } from '../../Controllers/User/login';
 

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
        const data = req.body
         
         if (!data.confirmPassword) {
          response = await login(data,res)
         }else{
          response = await postUser(data,res);
         }
     
        return res.status(200).json(response);
      case 'GET':
          response =await allUser()
        return res.status(200).json( response);
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
