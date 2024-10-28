export const DELETE_EMPLOYEE_BY_ID = `
  DELETE 
  FROM workers.employees
    WHERE id = $1;
`;

export const ADD_NEW_EMPLOYEE = `
  INSERT INTO workers.employees(
    name, department_id, manager_id, grade)
    VALUES ($1, $2, $3, $4)
`;
