import { ADD_NEW_EMPLOYEE } from '../../services';
import { db } from '../../config';

export const insertNewEmployee = (
  name: string,
  department_id: number,
  manager_id: number,
  grade: number
) => {
  return new Promise((resolve, reject) => {
    db.query(ADD_NEW_EMPLOYEE, [name, department_id, manager_id, grade], (error, result) => {
      error ? reject(error) : resolve(result);
    });
  });
};
