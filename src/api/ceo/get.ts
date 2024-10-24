import { fetchCEO } from '../../dal/ceo';
import { Request, Response } from 'express';

export const getCEO = async (req: Request, res: Response) => {
  try {
    const ceo = await fetchCEO();
    res.status(200).json(ceo);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};
