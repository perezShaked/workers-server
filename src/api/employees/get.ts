import { fetchEmployees } from '../../dal/employees';
import { Request, Response } from 'express';
import { Employee, Manager } from '../../types';

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await fetchEmployees();
    res.status(200).json(employees);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const getHierarchyEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await fetchEmployees();
    res.status(200).json(hierarchyEmployees(employees, [], null));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const hierarchyEmployees = (
  employees: Employee[],
  hierarchy: Manager[],
  manager_id: number | null
) => {
  if (employees.length == 0) {
    return hierarchy;
  }
  employees.forEach((employee) => {
    if (isSubordinate(employee, manager_id)) {
      const updatedEmployees = employees.filter((emp) => emp.id !== employee.id);
      const newEmployee: Manager = { ...employee, myEmployees: [] };

      newEmployee.myEmployees = hierarchyEmployees(updatedEmployees, [], employee.id);

      hierarchy.push(newEmployee);
    }
  });
  return hierarchy;
};

const isSubordinate = (employee: Employee, manager_id: number | null): boolean => {
  return employee.manager_id === manager_id;
};
