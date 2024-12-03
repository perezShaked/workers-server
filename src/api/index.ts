import { Router } from 'express';
import { departmentsRouter } from './departments';
import { employeesRouter } from './employees';
import { ceoRouter } from './ceo';
import { headOfResearchDepartmentRouter } from './researchDepartment';
import { addNewEmployeeRouter } from './addNewEmployee';
import { fireEmployeeRouter } from './fireEmployee';

export const apiRouter = Router();

apiRouter.use('/departments', departmentsRouter);
apiRouter.use('/employees', employeesRouter);
apiRouter.use('/ceo', ceoRouter);
apiRouter.use('/headOfResearchDepartment', headOfResearchDepartmentRouter);
apiRouter.use('/addNewEmployee', addNewEmployeeRouter);
apiRouter.use('/fireEmployee', fireEmployeeRouter);
