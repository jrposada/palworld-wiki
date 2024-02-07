const { DataTypes } = require('sequelize');

module.exports = {
    PALS_MODEL_NAME: 'Pals',
    PALS_DEFINITION: {
        abilitiesCooling: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesFarming: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesGathering: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesGeneratingElectricity: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesHandiwork: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesKindling: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesLumbering: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesMedicineProduction: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesMining: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesPlanting: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesTransporting: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        abilitiesWatering: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        drops: {
            allowNull: true,
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        elements: {
            allowNull: true,
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        food: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        index: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        production: {
            allowNull: true,
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
    },
};
