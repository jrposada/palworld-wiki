import { Entity } from './entity.js';

export type Pal = {
    abilities: Abilities;
    dropsBoss: string[];
    dropsNormal: string[];
    elements: string[];
    food: number;
    index: string;
    link: string;
    name: string;
    production: string[];
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
