const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class RestauranteModel extends Model {}

RestaurantModel.init(
  {
    // Atributos del restaurante
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    weblink: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'Restaurante', // Nombre del modelo
    tableName: 'restaurantes', // Nombre de la tabla en la base de datos
  }
);



module.exports = RestaurantModel;

