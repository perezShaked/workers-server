import { db } from '../../config';
import { DepartmentWithEmployeesSchema } from '../../validation';
import { GET_DEPARTMENTS } from '../../services';

export const fetchDepartments = () => {
  return new Promise((resolve, reject) => {
    db.query(GET_DEPARTMENTS, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parsedDepartment = DepartmentWithEmployeesSchema.safeParse(result.rows);
        parsedDepartment.success
          ? resolve(parsedDepartment.data)
          : reject(parsedDepartment.error.errors);
      }
    });
  });
};
