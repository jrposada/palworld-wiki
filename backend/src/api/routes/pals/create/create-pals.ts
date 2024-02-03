import { Request, Router } from 'express';
import { Pal } from 'shared/models/pal.ts';
import { isDefined } from 'shared/utils/is-defined.ts';
import { PalService } from '../../../../services/pal-service.ts';
import { ApiError } from '../../../helpers/api-error.ts';
import { apiHandler } from '../../../helpers/api-handler.ts';

function validate(
    _query: Request['query'],
    pal: Pal,
): { data: Pal; query: undefined } {
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

    return {
        data: {
            abilities: {
                cooling: pal.abilities.cooling,
                farming: pal.abilities.farming,
                gathering: pal.abilities.gathering,
                generatingElectricity: pal.abilities.generatingElectricity,
                handiwork: pal.abilities.handiwork,
                kindling: pal.abilities.kindling,
                lumbering: pal.abilities.lumbering,
                medicineProduction: pal.abilities.medicineProduction,
                mining: pal.abilities.mining,
                planting: pal.abilities.planting,
                transporting: pal.abilities.transporting,
                watering: pal.abilities.watering,
            },
            food: pal.food,
            index: pal.index,
            name: pal.name,
        },
        query: undefined,
    };
}

async function handler(_query: undefined, pal: Pal) {
    const service = new PalService();
    await service.initialize();

    const data = await service.create(pal);

    return { status: 201, data };
}

export function createPals(router: Router) {
    /**
     * @swagger
     * /pals:
     *  post:
     *      description: Returns all Pals.
     *      responses:
     *          200:
     *              description: List of Pals
     */
    router.post('/pals', apiHandler(handler, validate));
}
