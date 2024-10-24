import { db } from '../../config/db';
import { GET_DEPARTMENTS } from '../../services';
import { Request, Response } from 'express';

export const fetchDepartments = (req: Request, res: Response) => {
  db.query(GET_DEPARTMENTS, (error, result) => {
    if (error) {
      throw new Error(error.message);
    } else {
      res.status(200).json(result.rows);
    }
  });
};
