import { Request, Response } from 'express';
import { fetchDepartments } from '../../dal/departments';

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const ceo = await fetchDepartments();
    res.status(200).json(ceo);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error });
    }
  }
};
