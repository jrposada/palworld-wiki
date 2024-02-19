import { Model, Sequelize } from 'sequelize';
import { Entity } from 'shared/models/entity.ts';
import { Pal, PalEntity } from 'shared/models/pal.ts';
import { ObjectKeyPaths } from 'shared/utils/object-key-paths.ts';
/** @ts-ignore */
import palsDefinition from '../../../definitions/pals.cjs';

type PalDao = {
    abilitiesCooling: number;
    abilitiesFarming: number;
    abilitiesGathering: number;
    abilitiesGeneratingElectricity: number;
    abilitiesHandiwork: number;
    abilitiesKindling: number;
    abilitiesLumbering: number;
    abilitiesMedicineProduction: number;
    abilitiesMining: number;
    abilitiesPlanting: number;
    abilitiesTransporting: number;
    abilitiesWatering: number;
    dropsBoss: string[] | null;
    dropsNormal: string[] | null;
    elements: string[] | null;
    food: number;
    index: string;
    name: string;
    production: string[] | null;
};

export function palDao(sequelize: Sequelize) {
    return sequelize.define(
        palsDefinition.PALS_MODEL_NAME,
        palsDefinition.PALS_DEFINITION,
    );
}

export function toPalDao(pal: Pal): PalDao {
    return {
        abilitiesCooling: pal.abilities.cooling,
        abilitiesFarming: pal.abilities.farming,
        abilitiesGathering: pal.abilities.gathering,
        abilitiesGeneratingElectricity: pal.abilities.generatingElectricity,
        abilitiesHandiwork: pal.abilities.handiwork,
        abilitiesKindling: pal.abilities.kindling,
        abilitiesLumbering: pal.abilities.lumbering,
        abilitiesMedicineProduction: pal.abilities.medicineProduction,
        abilitiesMining: pal.abilities.mining,
        abilitiesPlanting: pal.abilities.planting,
        abilitiesTransporting: pal.abilities.transporting,
        abilitiesWatering: pal.abilities.watering,
        dropsBoss: (pal.dropsBoss.length && pal.dropsBoss) || null,
        dropsNormal: (pal.dropsNormal.length && pal.dropsNormal) || null,
        elements: (pal.elements.length && pal.elements) || null,
        food: pal.food,
        index: pal.index,
        name: pal.name,
        production: (pal.production.length && pal.production) || null,
    };
}

export function toPalEntity(model: Model): PalEntity {
    const palDao = model.toJSON<PalDao & Entity>();
    return {
        abilities: {
            cooling: palDao.abilitiesCooling,
            farming: palDao.abilitiesFarming,
            gathering: palDao.abilitiesGathering,
            generatingElectricity: palDao.abilitiesGeneratingElectricity,
            handiwork: palDao.abilitiesHandiwork,
            kindling: palDao.abilitiesKindling,
            lumbering: palDao.abilitiesLumbering,
            medicineProduction: palDao.abilitiesMedicineProduction,
            mining: palDao.abilitiesMining,
            planting: palDao.abilitiesPlanting,
            transporting: palDao.abilitiesTransporting,
            watering: palDao.abilitiesWatering,
        },
        createdAt: palDao.createdAt,
        dropsBoss: palDao.dropsBoss ?? [],
        dropsNormal: palDao.dropsNormal ?? [],
        elements: palDao.elements ?? [],
        food: palDao.food,
        id: palDao.id,
        index: palDao.index,
        name: palDao.name,
        production: palDao.production ?? [],
        updatedAt: palDao.updatedAt,
    };
}

export const PAL_DAO_MAPPER: Partial<
    Record<ObjectKeyPaths<PalEntity>, keyof (PalDao & Entity)>
> = {
    'abilities.cooling': 'abilitiesCooling',
    'abilities.farming': 'abilitiesFarming',
    'abilities.gathering': 'abilitiesGathering',
    'abilities.generatingElectricity': 'abilitiesGeneratingElectricity',
    'abilities.handiwork': 'abilitiesHandiwork',
    'abilities.kindling': 'abilitiesKindling',
    'abilities.lumbering': 'abilitiesLumbering',
    'abilities.medicineProduction': 'abilitiesMedicineProduction',
    'abilities.mining': 'abilitiesMining',
    'abilities.planting': 'abilitiesPlanting',
    'abilities.transporting': 'abilitiesTransporting',
    'abilities.watering': 'abilitiesWatering',
    createdAt: 'createdAt',
    dropsBoss: 'dropsBoss',
    dropsNormal: 'dropsNormal',
    elements: 'elements',
    food: 'food',
    id: 'id',
    index: 'index',
    name: 'name',
    production: 'production',
    updatedAt: 'updatedAt',
};
