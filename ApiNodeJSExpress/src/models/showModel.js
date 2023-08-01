const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ShowModel extends Model {}

ShowModel.init(
  {
    // Propiedades del show
    nombre: {
      type: DataTypes.STRING,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    link:{
      type:DataTypes.STRING,
    },
    imagen:{
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'Show', // Nombre del modelo
    tableName: 'show', // Nombre de la tabla en la base de datos
  }
);



module.exports = ShowModel;