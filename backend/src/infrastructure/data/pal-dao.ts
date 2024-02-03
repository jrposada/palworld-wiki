import { DataTypes, Model, Sequelize } from 'sequelize';
import { Entity } from 'shared/models/entity.ts';
import { Pal, PalEntity } from 'shared/models/pal.ts';

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
    food: number;
    index: number;
    name: string;
};

export function palDao(sequelize: Sequelize) {
    return sequelize.define('pal', {
        abilitiesCooling: DataTypes.INTEGER,
        abilitiesFarming: DataTypes.INTEGER,
        abilitiesGathering: DataTypes.INTEGER,
        abilitiesGeneratingElectricity: DataTypes.INTEGER,
        abilitiesHandiwork: DataTypes.INTEGER,
        abilitiesKindling: DataTypes.INTEGER,
        abilitiesLumbering: DataTypes.INTEGER,
        abilitiesMedicineProduction: DataTypes.INTEGER,
        abilitiesMining: DataTypes.INTEGER,
        abilitiesPlanting: DataTypes.INTEGER,
        abilitiesTransporting: DataTypes.INTEGER,
        abilitiesWatering: DataTypes.INTEGER,
        food: DataTypes.INTEGER,
        index: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        name: DataTypes.STRING,
    });
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
        food: pal.food,
        index: pal.index,
        name: pal.name,
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
        food: palDao.food,
        id: palDao.id,
        index: palDao.index,
        name: palDao.name,
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
    food: 'food',
    id: 'id',
    index: 'index',
    name: 'name',
    updatedAt: 'updatedAt',
};
