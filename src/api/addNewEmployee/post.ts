import { Request, Response } from 'express';
import { insertNewEmployee, isDepartmentExist, isManagerExist } from '../../dal/addNewEmployee';
import { NewEmployeeSchema } from '../../schemas';

export const postNewEmployee = async (req: Request, res: Response) => {
  const parseResult = NewEmployeeSchema.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({
      error: 'Invalid request data',
      details: parseResult.error.errors,
    });
  } else {
    const { name, department_id, manager_id, grade } = req.body;
    if (!(await isDepartmentExist(department_id))) {
      res.status(400).send('invalid department id');
    } else if (!(await isManagerExist(manager_id))) {
      res.status(400).send('invalid manager id');
    } else {
      try {
        await insertNewEmployee(name, department_id, manager_id, grade);
        res.status(201).send('Employee Add (:');
      } catch (error) {
        res.status(500).send('An error occurred while adding the employee');
      }
    }
  }
};
