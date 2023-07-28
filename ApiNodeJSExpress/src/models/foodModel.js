/* const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class FoodModel extends Model {}

FoodModel.init(
  {
    // Define las propiedades de tu modelo de usuario aquí
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    ciudad: {
      type: DataTypes.STRING,
    },
    pais: {
      type: DataTypes.STRING,
    },
    capacidad:{
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Restaurant', // Nombre del modelo
    tableName: 'restaurant', // Nombre de la tabla en la base de datos
  }
);



module.exports = RestaurantModel; */