import { EmployeeSchema } from '../validation';
import { z } from 'zod';

export type Employee = z.infer<typeof EmployeeSchema>;

export type Manager = Employee & {
  myEmployees: Employee[];
};
