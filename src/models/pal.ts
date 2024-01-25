import { Entity } from './entity.js';

export type Pal = {
    abilities: Abilities;
    food: number;
    index: number;
    name: string;
};

export type PalEntity = Pal &
    Entity & {
        abilities: Abilities;
        food: number;
        index: number;
        name: string;
    };

export type Abilities = {
    cooling: number;
    farming: number;
    gathering: number;
    generatingElectricity: number;
    handiwork: number;
    kindling: number;
    lumbering: number;
    medicineProduction: number;
    mining: number;
    planting: number;
    transporting: number;
    watering: number;
};
