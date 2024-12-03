import { db } from '../config';
import { GET_EMPLOYEE_BY_ID, GET_DEPARTMENT_BY_ID } from '../services';
import { Employee } from '../types';

export const isDepartmentExist = (department_id: number): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(GET_DEPARTMENT_BY_ID, [department_id], (error, result) => {
      error ? reject(error) : resolve(Boolean(result.rows.length));
    });
  });
};

export const isManagerExist = (manager_id: number): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(GET_EMPLOYEE_BY_ID, [manager_id], (error, result) => {
      error ? reject(error) : resolve(Boolean(result.rows.length));
    });
  });
};

export const isSubordinate = (employee: Employee, managerId: number | null): boolean => {
  return employee.manager_id === managerId;
};

export const getHeadOfDepartment = (departmentEmployees: Employee[]): Employee | undefined => {
  const departmentManagersIds = new Set(departmentEmployees.map(({ id }) => id));
  const headOfDepartment = departmentEmployees.find(
    (employee) => employee.manager_id != null && !departmentManagersIds.has(employee.manager_id)
  );
  return headOfDepartment;
};
