import { Router } from 'express';
import { apiHandler } from '../../../helpers/api-handler.js';

function handler() {
    return { status: 200, data: 'Hello World! Get All' };
}

export function getAllPals(router: Router) {
    /**
     * @swagger
     * /pals:
     *  get:
     *      description: Returns html for the default ExpressJS welcome page.
     *      responses:
     *          200:
     *              description: html content
     */
    router.get('/pals', apiHandler(handler));
}
