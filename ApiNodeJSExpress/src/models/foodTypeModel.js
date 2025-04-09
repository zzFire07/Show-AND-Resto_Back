const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class FoodTypeModel extends Model {}

FoodTypeModel.init(
  {
    // Atributos del restaurante
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'FoodType', // Nombre del modelo
    tableName: 'tipocomidas', // Nombre de la tabla en la base de datos
  }
);



module.exports = FoodTypeModel;

