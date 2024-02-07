'use strict';

const { PALS_MODEL_NAME } = require('../definitions/pals.cjs');
const DATA = require('../seeders-data/v1.4.0.cjs');

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
        return queryInterface.bulkInsert(
            PALS_MODEL_NAME,
            DATA.map((item) => ({
                ...item,

                createdAt: new Date(),
                updatedAt: new Date(),
            })),
        );
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
