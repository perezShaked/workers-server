import { Request, Response } from 'express';
import { insertNewEmployee } from '../../dal';
import { NewEmployeeSchema } from '../../validation';
import { isDepartmentExist, isManagerExist } from '../../utils';
import { StatusCodes } from 'http-status-codes';

export const postNewEmployee = async (req: Request, res: Response) => {
  const newEmployeeInformation = NewEmployeeSchema.safeParse(req.body);
  if (!newEmployeeInformation.success) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid request data',
      details: newEmployeeInformation.error.errors,
    });
  } else {
    const { name, department_id, manager_id, grade } = req.body;
    if (!(await isDepartmentExist(department_id))) {
      res.status(StatusCodes.BAD_REQUEST).send('invalid department id');
    } else if (!(await isManagerExist(manager_id))) {
      res.status(StatusCodes.BAD_REQUEST).send('invalid manager id');
    } else {
      try {
        await insertNewEmployee(name, department_id, manager_id, grade);
        res.status(StatusCodes.CREATED).send('Employee Add (:');
      } catch (error) {
        res.status(StatusCodes.NOT_MODIFIED).send('An error occurred while adding the employee');
      }
    }
  }
};
