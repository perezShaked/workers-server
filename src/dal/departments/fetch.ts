import { db } from '../../config/db';
import { DepartmentWithEmployeesSchema } from '../../schemas';
import { GET_DEPARTMENTS } from '../../services';

export const fetchDepartments = () => {
  return new Promise((resolve, reject) => {
    db.query(GET_DEPARTMENTS, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parseResult = DepartmentWithEmployeesSchema.safeParse(result.rows);
        if (parseResult.success) {
          resolve(parseResult.data);
        } else {
          reject(parseResult.error);
        }
      }
    });
  });
};
