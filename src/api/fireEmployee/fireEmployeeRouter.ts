import { Router } from 'express';
import { fireEmployee } from './delete';

export const fireEmployeeRouter = Router();

fireEmployeeRouter.delete('/', fireEmployee);
