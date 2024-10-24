import { Router } from 'express';
import { departmentsRouter } from './departments';
import { employeesRouter } from './employees';
import { ceoRouter } from './ceo';

export const apiRouter = Router();

apiRouter.use('/departments', departmentsRouter);
apiRouter.use('/employees', employeesRouter);
apiRouter.use('/ceo', ceoRouter);
