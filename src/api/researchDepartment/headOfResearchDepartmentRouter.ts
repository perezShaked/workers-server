import { Router } from 'express';
import { getHeadOfResearchDepartment } from './get';

export const headOfResearchDepartmentRouter = Router();

headOfResearchDepartmentRouter.get('/', getHeadOfResearchDepartment);
