import { db } from '../../config';
import { EmployeesSchema } from '../../validation';
import { GET_RESEARCH_DEPARTMENT } from '../../services';
import { Employee } from '../../types';

export const fetchResearchDepartment = () => {
  return new Promise<Employee[]>((resolve, reject) => {
    db.query(GET_RESEARCH_DEPARTMENT, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parseEmployees = EmployeesSchema.safeParse(result.rows);
        parseEmployees.success ? resolve(parseEmployees.data) : reject(parseEmployees.error.errors);
      }
    });
  });
};
