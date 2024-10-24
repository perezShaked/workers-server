export const GET_DEPARTMENTS = `
  SELECT
  	departments.id AS department_id,
    departments.name AS department_name,
    COALESCE(
          json_agg(
              json_build_object(
                  'employee_id', employees.id,
                  'employee_name', employees.name
              )
          ),'[]'
      ) AS department_employees
  FROM workers.departments
  LEFT JOIN workers.employees
    ON departments.id = employees.department_id
  GROUP BY  departments.id, departments.name
  ORDER BY  departments.id
`;

export const GET_EMPLOYEES = `
  SELECT 
  	employees.id,
    employees.name,
    employees.hire_date,
    employees.grade,
    managers.id AS manager_id,
    managers.name AS manager_name,
    departments.name AS department_name
  FROM workers.employees AS employees
  LEFT JOIN workers.employees AS managers 
    ON managers.id = employees.manager_id 
  LEFT JOIN workers.departments 
    ON employees.department_id = departments.id
  ORDER BY employees.id
`;

export const GET_CEO = `
  SELECT 
    id, 
    name, 
    hire_date, 
    department_id, 
    manager_id, 
    grade
  FROM workers.employees
  WHERE manager_id IS NULL
`;
