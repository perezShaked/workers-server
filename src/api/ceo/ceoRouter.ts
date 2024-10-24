import { Router } from 'express';
import { getCEO } from './get';

export const ceoRouter = Router();

ceoRouter.get('/', getCEO);
