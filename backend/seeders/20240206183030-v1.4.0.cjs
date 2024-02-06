'use strict';

const { PALS_MODEL_NAME } = require('../definitions/pals.cjs');

/*
{
    abilitiesCooling: 0,
    abilitiesFarming: 0,
    abilitiesGathering: 0,
    abilitiesGeneratingElectricity: 0,
    abilitiesHandiwork: 0,
    abilitiesKindling: 0,
    abilitiesLumbering: 0,
    abilitiesMedicineProduction: 0,
    abilitiesMining: 0,
    abilitiesPlanting: 0,
    abilitiesTransporting: 0,
    abilitiesWatering: 0,
    drops: [],
    elements: [],
    food: 0,
    index: 0,
    name: '',
    production: [],

    createdAt: new Date(),
    updatedAt: new Date(),
}
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // eslint-disable-next-line no-unused-vars
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert(PALS_MODEL_NAME, [
            {
                abilitiesCooling: 0,
                abilitiesFarming: 1,
                abilitiesGathering: 0,
                abilitiesGeneratingElectricity: 0,
                abilitiesHandiwork: 1,
                abilitiesKindling: 0,
                abilitiesLumbering: 0,
                abilitiesMedicineProduction: 0,
                abilitiesMining: 0,
                abilitiesPlanting: 0,
                abilitiesTransporting: 1,
                abilitiesWatering: 0,
                drops: ['wool', 'lamballMutton'],
                elements: ['neutral'],
                food: 2,
                index: 1,
                name: 'Lamball',
                production: ['wool'],

                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                abilitiesCooling: 0,
                abilitiesFarming: 0,
                abilitiesGathering: 1,
                abilitiesGeneratingElectricity: 0,
                abilitiesHandiwork: 1,
                abilitiesKindling: 0,
                abilitiesLumbering: 0,
                abilitiesMedicineProduction: 0,
                abilitiesMining: 1,
                abilitiesPlanting: 0,
                abilitiesTransporting: 1,
                abilitiesWatering: 0,
                drops: ['redBerries'],
                elements: ['neutral'],
                food: 2,
                index: 2,
                name: 'Cattiva',
                production: null,

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete(PALS_MODEL_NAME, null, {});
    },
};
