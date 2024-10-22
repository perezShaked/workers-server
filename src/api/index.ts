import { Router } from 'express';
import { departmentsRouter } from './departments';

export const apiRouter = Router();

apiRouter.use('/departments', departmentsRouter);
