import { Request, Response } from 'express';
import { fetchDepartments } from '../../dal';
import { StatusCodes } from 'http-status-codes';

export const getDepartments = async (_req: Request, res: Response) => {
  try {
    const departments = await fetchDepartments();
    res.status(StatusCodes.OK).json(departments);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
