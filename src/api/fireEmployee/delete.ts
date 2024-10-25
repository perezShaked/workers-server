import { Request, Response } from 'express';
import { insertNewEmployee, isDepartmentExist, isManagerExist } from '../../dal/addNewEmployee';
import { EmployeeIdSchema, NewEmployeeSchema } from '../../schemas';
import { deleteEmployee } from '../../dal/fireEmployee';

export const fireEmployee = async (req: Request, res: Response) => {
  const parseResult = EmployeeIdSchema.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({
      error: 'Invalid request data',
      details: parseResult.error.errors,
    });
  } else {
    const employee_id = req.body.id;
    try {
      await deleteEmployee(employee_id);
      res.status(200).send('Employee Fire ):');
    } catch (error) {
      res.status(500).send('An error occurred while firing the employee');
    }
  }
};
