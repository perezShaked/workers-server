import { fetchEmployees } from '../../dal';
import { Request, Response } from 'express';
import { Employee, Manager } from '../../types';
import { StatusCodes } from 'http-status-codes';
import { isSubordinate } from '../../utils';

export const getEmployees = async (_req: Request, res: Response) => {
  try {
    const employees = await fetchEmployees();
    res.status(StatusCodes.OK).json(employees);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const getHierarchyEmployees = async (_req: Request, res: Response) => {
  try {
    const employees = await fetchEmployees();
    res.status(StatusCodes.OK).json(hierarchyEmployees(employees, [], null));
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

const hierarchyEmployees = (
  allEmployees: Employee[],
  employeeWithSubordinates: Manager[],
  managerId: number | null
): Manager[] => {
  if (allEmployees.length === 0) {
    return employeeWithSubordinates;
  }

  allEmployees.forEach((employee) => {
    if (isSubordinate(employee, managerId)) {
      const remainingEmployees = allEmployees.filter((emp) => emp.id !== employee.id);
      const managerNode: Manager = { ...employee, myEmployees: [] };

      managerNode.myEmployees = hierarchyEmployees(remainingEmployees, [], employee.id);

      employeeWithSubordinates.push(managerNode);
    }
  });

  return employeeWithSubordinates;
};
