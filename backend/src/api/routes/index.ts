import { Router } from 'express';
import { createPals } from './pals/create/create-pals.ts';
import { getAllPals } from './pals/get-all/get-all-pals.ts';

const router = Router();

createPals(router);
getAllPals(router);

export { router };