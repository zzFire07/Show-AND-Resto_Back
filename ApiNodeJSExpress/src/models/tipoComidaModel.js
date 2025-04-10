const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class tipoComidaModel extends Model {}

tipoComidaModel.init(
  {
    // Atributos del restaurante
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'tipoComida', // Nombre del modelo
    schema: 'public',
    tableName: 'tipocomidas', // Nombre de la tabla en la base de datos
    timestamps: false, // Si no necesitas createdAt y updatedAt
  }
);



module.exports = tipoComidaModel;

