import { Request, Router } from 'express';
import { Query } from '../../../../models/query.js';
import { PalService } from '../../../../services/pal-service.js';
import { apiHandler } from '../../../helpers/api-handler.js';

function validate(
    query: Request['query'],
    _data: undefined,
): { data: undefined; query: Query } {
    return { data: undefined, query: new Query(query) };
}

async function handler(query: Query, _data: undefined) {
    const service = new PalService();
    await service.initialize();

    const data = await service.get(query);

    return { status: 200, data };
}

export function getAllPals(router: Router) {
    /**
     * @swagger
     * /pals:
     *  get:
     *      description: Returns complete list of pals.
     *      responses:
     *          200:
     *              description: html content
     */
    router.get('/pals', apiHandler(handler, validate));
}
