const { DataTypes } = require('sequelize');

module.exports = {
    PALS_MODEL_NAME: 'Pals',
    PALS_DEFINITION: {
        placeholder: {
            type: DataTypes.STRING,
        },
    },
};
