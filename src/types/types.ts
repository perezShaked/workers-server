export type Employee = {
  id: number;
  name: string;
  hire_date: Date;
  grade: number;
  manager_id: number | null;
  manager_name: string | null;
  department_name: string | null;
};

export type Manager = {
  id: number;
  name: string;
  hire_date: Date;
  grade: number;
  manager_id: number | null;
  manager_name: string | null;
  department_name: string | null;
  myEmployees: Employee[];
};
