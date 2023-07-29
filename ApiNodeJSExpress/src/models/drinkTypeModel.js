const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class DrinkTypeModel extends Model {}

DrinkTypeModel.init(
  {
    // Atributos del tipo de bebida (el id lo genera Postgres)
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'DrinkType', // Nombre del modelo
    tableName: 'drinkType', // Nombre de la tabla en la base de datos
  }
);



module.exports = FoodTypeModel;

