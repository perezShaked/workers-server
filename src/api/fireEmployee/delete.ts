import { Request, Response } from 'express';
import { EmployeeIdSchema } from '../../validation';
import { deleteEmployee } from '../../dal';
import { StatusCodes } from 'http-status-codes';

export const fireEmployee = async (req: Request, res: Response) => {
  const deleteEmployeeId = EmployeeIdSchema.safeParse(req.body);
  if (!deleteEmployeeId.success) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid request data',
      details: deleteEmployeeId.error.errors,
    });
  } else {
    const employee_id = req.body.id;
    try {
      await deleteEmployee(employee_id);
      res.status(StatusCodes.OK).send('Employee Fire ):');
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send('An error occurred while firing the employee');
    }
  }
};
