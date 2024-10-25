import { Router } from 'express';
import { postNewEmployee } from './post';

export const addNewEmployeeRouter = Router();

addNewEmployeeRouter.post('/', postNewEmployee);
