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
    weblink: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    id_departamento: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Restaurante', // Nombre del modelo
    schema: 'public',
    tableName: 'restaurantes', // Nombre de la tabla en la base de datos
    timestamps: false, // Si no necesitas createdAt y updatedAt
  }
);



module.exports = RestaurantModel;

