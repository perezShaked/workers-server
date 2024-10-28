import { db } from '../../config';
import { EmployeesSchema } from '../../validation';
import { GET_EMPLOYEES } from '../../services';
import { Employee } from '../../types';

export const fetchEmployees = () => {
  return new Promise<Employee[]>((resolve, reject) => {
    db.query(GET_EMPLOYEES, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parseEmployees = EmployeesSchema.safeParse(result.rows);
        parseEmployees.success ? resolve(parseEmployees.data) : reject(parseEmployees.error.errors);
      }
    });
  });
};
