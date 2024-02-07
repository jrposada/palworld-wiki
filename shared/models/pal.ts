import { Entity } from './entity.js';

export type Pal = {
    abilities: Abilities;
    // drops: Drop[];
    food: number;
    index: string;
    name: string;
};

export type PalEntity = Pal & Entity;

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

export type Drop = 'bone' | 'innovativeTechnicalManual' | 'largePalSoul';
