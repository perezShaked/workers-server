import { StatusCodes } from 'http-status-codes';
import { fetchCEO } from '../../dal';
import { Request, Response } from 'express';

export const getCEO = async (_req: Request, res: Response) => {
  try {
    const ceo = await fetchCEO();
    res.status(StatusCodes.OK).json(ceo);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
