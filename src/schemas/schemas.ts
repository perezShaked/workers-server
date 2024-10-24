import { z } from 'zod';

export const EmployeesSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    hire_date: z.date(),
    grade: z.number(),
    manager_id: z.number().nullable(),
    manager_name: z.string().optional().nullable(),
    department_name: z.string().nullable(),
  })
);

export const CeoSchema = z.object({
  id: z.number(),
  name: z.string(),
  hire_date: z.date(),
  grade: z.number(),
});
