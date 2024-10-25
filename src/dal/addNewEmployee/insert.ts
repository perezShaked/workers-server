import { ADD_NEW_EMPLOYEE, IS_DEPARTMENT_EXIST } from '../../services';
import { db } from '../../config/db';

export const insertNewEmployee = (
  name: string,
  department_id: number,
  manager_id: number,
  grade: number
) => {
  return new Promise((resolve, reject) => {
    db.query(ADD_NEW_EMPLOYEE, [name, department_id, manager_id, grade], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const isDepartmentExist = (department_id: number) => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(IS_DEPARTMENT_EXIST, [department_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(Boolean(result.rows.length));
      }
    });
  });
};

export const isManagerExist = (manager_id: number) => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(IS_DEPARTMENT_EXIST, [manager_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(Boolean(result.rows.length));
      }
    });
  });
};
