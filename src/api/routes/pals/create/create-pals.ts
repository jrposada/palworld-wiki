import { Router } from 'express';
import { ApiError } from '../../../helpers/api-error.js';
import { apiHandler } from '../../../helpers/api-handler.js';

type Pal = {
    name: string;
};

function validate(pal: Pal) {
    if (!pal.name) {
        throw new ApiError(400, 'Name is required');
    }
}

function handler(pal: Pal) {
    console.log(pal);
    return { status: 200, data: 'Hello World! 2' };
}

export function createPals(router: Router) {
    /**
     * @swagger
     * /pals:
     *  get:
     *      description: Returns all Pals.
     *      responses:
     *          200:
     *              description: List of Pals
     */
    router.post('/pals', apiHandler(handler, validate));
}
