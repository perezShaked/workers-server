import { db } from '../../config/db';
import { EmployeesSchema } from '../../schemas';
import { GET_RESEARCH_DEPARTMENT } from '../../services';
import { Ceo, Employee } from '../../types';

export const fetchResearchDepartment = () => {
  return new Promise<Employee[]>((resolve, reject) => {
    db.query(GET_RESEARCH_DEPARTMENT, (error, result) => {
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
