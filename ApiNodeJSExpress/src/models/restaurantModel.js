const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class RestaurantModel extends Model {}

RestaurantModel.init(
  {
    // Atributos del restaurante
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'Restaurant', // Nombre del modelo
    tableName: 'restaurant', // Nombre de la tabla en la base de datos
  }
);



module.exports = RestaurantModel;

