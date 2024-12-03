import { DELETE_EMPLOYEE_BY_ID } from '../../services';
import { db } from '../../config';

export const deleteEmployee = (employee_id: number) => {
  return new Promise((resolve, reject) => {
    db.query(DELETE_EMPLOYEE_BY_ID, [employee_id], (error, result) => {
      error ? reject(error) : resolve(result);
    });
  });
};
