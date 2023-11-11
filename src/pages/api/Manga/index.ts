import type { NextApiRequest, NextApiResponse } from 'next';

interface ErrorResponse {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            try {
                // Lógica para el método POST
                return res.status(200).json({ message: 'POST request handled successfully' });
            } catch (error: any) {
                const typedError: ErrorResponse = { error: error.message || 'Unknown error' };
                return res.status(400).json(typedError);
            }

        case "GET":
            try {
                // Lógica para el método GET
                return res.status(200).json({ message: 'GET request handled successfully' });
            } catch (error: any) {
                const typedError: ErrorResponse = { error: error.message || 'Unknown error' };
                return res.status(500).json(typedError);
            }

        case "PATCH":
            try {
                // Lógica para el método PATCH
                return res.status(200).json({ message: 'PATCH request handled successfully' });
            } catch (error: any) {
                const typedError: ErrorResponse = { error: error.message || 'Unknown error' };
                return res.status(500).json(typedError);
            }

        case "DELETE":
            try {
                // Lógica para el método DELETE
                return res.status(200).json({ message: 'DELETE request handled successfully' });
            } catch (error: any) {
                const typedError: ErrorResponse = { error: error.message || 'Unknown error' };
                return res.status(500).json(typedError);
            }

        default:
            return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
