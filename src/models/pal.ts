export class Pal {
    constructor(
        readonly abilities: Abilities,
        readonly food: number,
        readonly index: number,
        readonly name: string,
    ) {}
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
