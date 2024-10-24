import { Router } from 'express';
import { getEmployees, getHierarchyEmployees } from './get';

export const employeesRouter = Router();

employeesRouter.get('/', getEmployees);
employeesRouter.get('/hierarchy', getHierarchyEmployees)

