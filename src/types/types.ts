import { CeoSchema, EmployeeSchema } from '../schemas';
import { z } from 'zod';

export type Employee = z.infer<typeof EmployeeSchema>;

export type Manager = {
  id: number;
  name: string;
  hire_date: Date;
  grade: number;
  manager_id: number | null;
  manager_name?: string | null;
  department_name: string | null;
  myEmployees: Employee[];
};

export type Ceo = z.infer<typeof CeoSchema>;
