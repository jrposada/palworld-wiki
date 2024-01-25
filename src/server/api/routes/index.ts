import { Router } from 'express';
import { createPals } from './pals/create/create-pals.js';
import { getAllPals } from './pals/get-all/get-all-pals.js';

const router = Router();

createPals(router);
getAllPals(router);

export { router };
