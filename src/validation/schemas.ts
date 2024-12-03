import { z } from 'zod';

export const EmployeeSchema = z.object({
  id: z.number(),
  name: z.string(),
  hire_date: z.date(),
  grade: z.number(),
  manager_id: z.number().nullable(),
  manager_name: z.string().optional().nullable(),
  department_name: z.string().optional().nullable(),
});

export const EmployeesSchema = z.array(EmployeeSchema);

export const NewEmployeeSchema = z.object({
  name: z.string(),
  department_id: z.number(),
  manager_id: z.number(),
  grade: z.number(),
});

export const EmployeeIdSchema = z.object({
  id: z.number(),
});

export const DepartmentWithEmployeesSchema = z.array(
  z.object({
    department_id: z.number(),
    department_name: z.string(),
    department_employees: z.array(
      z.object({
        employee_id: z.number(),
        employee_name: z.string(),
      })
    ),
  })
);
