const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class ShowModel extends Model {}

ShowModel.init(
  {
    // Propiedades del show
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'Show', // Nombre del modelo
    tableName: 'show', // Nombre de la tabla en la base de datos
  }
);



module.exports = UserModel;