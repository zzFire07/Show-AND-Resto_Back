const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class RestaurantModel extends Model {}

RestaurantModel.init(
  {
    // Define las propiedades de tu modelo de usuario aquí
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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



module.exports = RestaurantModel;

