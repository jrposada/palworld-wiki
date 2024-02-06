import { Router } from 'express';
import { getAllPals } from './pals/get-all/get-all-pals.ts';

const router = Router();

getAllPals(router);

export { router };
