import { ApiError } from '../../../helpers/api-error.js';
import { apiHandler } from '../../../helpers/api-handler.js';

function validate(body) {
    if (!body.name) {
        throw new ApiError(400, 'Name is required');
    }
}

function handler(body) {
    console.log(body);
    return { status: 200, data: 'Hello World!' };
}

export function createPals(router) {
    /**
     * @swagger
     * /pals:
     *  get:
     *      description: Returns html for the default ExpressJS welcome page.
     *      responses:
     *          200:
     *              description: html content
     */
    router.post('/pals', apiHandler(handler, validate));
}
