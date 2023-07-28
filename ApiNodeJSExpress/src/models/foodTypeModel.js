const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class FoodTypeModel extends Model {}

FoodTypeModel.init(
  {
    // Define las propiedades de tu modelo de usuario aquí
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'FoodType', // Nombre del modelo
    tableName: 'foodType', // Nombre de la tabla en la base de datos
  }
);



module.exports = FoodTypeModel;