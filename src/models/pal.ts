import { Entity } from './entity.js';

export class Pal {
    constructor(
        readonly abilities: Abilities,
        readonly food: number,
        readonly index: number,
        readonly name: string,
    ) {}
}

export class PalEntity extends Pal implements Entity {
    constructor(
        readonly abilities: Abilities,
        readonly createdAt: Date,
        readonly food: number,
        readonly id: number,
        readonly index: number,
        readonly name: string,
        readonly updatedAt: Date,
    ) {
        super(abilities, food, index, name);
    }
}

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
