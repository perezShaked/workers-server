import { fetchResearchDepartment } from '../../dal';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {getHeadOfDepartment} from '../../utils'

export const getHeadOfResearchDepartment = async (_req: Request, res: Response) => {
  try {
    const researchDepartment = await fetchResearchDepartment();
    res.status(StatusCodes.OK).json(getHeadOfDepartment(researchDepartment));
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};


