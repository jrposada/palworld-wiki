import { Router } from 'express';
import { Pal } from '../../../../models/pal.js';
import { PalService } from '../../../../services/pal-service.js';
import { isDefined } from '../../../../utils/is-defined.js';
import { ApiError } from '../../../helpers/api-error.js';
import { apiHandler } from '../../../helpers/api-handler.js';

function validate(pal: Pal) {
    if (
        !isDefined(pal.abilities) ||
        !isDefined(pal.abilities.cooling) ||
        !isDefined(pal.abilities.farming) ||
        !isDefined(pal.abilities.gathering) ||
        !isDefined(pal.abilities.generatingElectricity) ||
        !isDefined(pal.abilities.handiwork) ||
        !isDefined(pal.abilities.kindling) ||
        !isDefined(pal.abilities.lumbering) ||
        !isDefined(pal.abilities.medicineProduction) ||
        !isDefined(pal.abilities.mining) ||
        !isDefined(pal.abilities.planting) ||
        !isDefined(pal.abilities.transporting) ||
        !isDefined(pal.abilities.watering) ||
        !isDefined(pal.index) ||
        !isDefined(pal.name)
    ) {
        console.log('Invalid pal:', { pal });
        throw new ApiError(400, 'Invalid data');
    }
}

async function handler(pal: Pal) {
    const service = new PalService();
    await service.initialize();

    const { isNew, data } = await service.create(pal);

    return { status: isNew ? 201 : 200, data };
}

export function createPals(router: Router) {
    /**
     * @swagger
     * /pals:
     *  put:
     *      description: Returns all Pals.
     *      responses:
     *          200:
     *              description: List of Pals
     */
    router.put('/pals', apiHandler(handler, validate));
}
