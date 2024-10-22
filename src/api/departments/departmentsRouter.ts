import { Router } from 'express';
import { getDepartments } from './get';

export const departmentsRouter = Router();

departmentsRouter.get('/', getDepartments);
