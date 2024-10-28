import { db } from '../../config';
import { EmployeeSchema } from '../../validation';
import { GET_CEO } from '../../services';
import { Employee } from '../../types';

export const fetchCEO = () => {
  return new Promise<Employee>((resolve, reject) => {
    db.query(GET_CEO, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parsedEmployee = EmployeeSchema.safeParse(result.rows[0]);
        parsedEmployee.success ? resolve(parsedEmployee.data) : reject(parsedEmployee.error.errors);
      }
    });
  });
};
