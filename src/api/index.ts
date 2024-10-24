import { Router } from 'express';
import { departmentsRouter } from './departments';
import { employeesRouter } from './employees/employeesRouter';

export const apiRouter = Router();

apiRouter.use('/departments', departmentsRouter);
apiRouter.use('/employees', employeesRouter);
