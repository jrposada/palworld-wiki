'use strict';

const { Model } = require('sequelize');
const { PALS_DEFINITION, PALS_MODEL_NAME } = require('../definitions/pals.cjs');

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
    class Pals extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    Pals.init(PALS_DEFINITION, {
        sequelize,
        modelName: PALS_MODEL_NAME,
    });
    return Pals;
};
