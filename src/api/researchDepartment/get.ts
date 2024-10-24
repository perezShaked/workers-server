import { fetchResearchDepartment } from '../../dal/researchDepartment';
import { Request, Response } from 'express';
import { Employee } from '../../types';

export const getHeadOfResearchDepartment = async (req: Request, res: Response) => {
  try {
    const researchDepartment = await fetchResearchDepartment();
    res.status(200).json(headOfResearchDepartment(researchDepartment));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const headOfResearchDepartment = (researchDepartment: Employee[]) => {
  const managersIds = new Set(researchDepartment.map((employee) => employee.id));
  const headOf = researchDepartment.find((employee) => {
    return employee.manager_id != null && !managersIds.has(employee.manager_id);
  });
  return headOf;
};
