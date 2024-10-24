import { db } from '../../config/db';
import { EmployeesSchema } from '../../schemas';
import { GET_EMPLOYEES } from '../../services';
import { Employee } from '../../types';

export const fetchEmployees = () => {
  return new Promise<Employee[]>((resolve, reject) => {
    db.query(GET_EMPLOYEES, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parseResult = EmployeesSchema.safeParse(result.rows);
        if (parseResult.success) {
          resolve(parseResult.data);
        } else {
          reject(parseResult.error);
        }
      }
    });
  });
};
