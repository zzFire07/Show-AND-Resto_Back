const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class UserModel extends Model {}

UserModel.init(
  {
    // Propiedades del usuario
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    ci: {
      type: DataTypes.INTEGER,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    ciudad:{
      type: DataTypes.STRING,
    },
    pais: {
      type: DataTypes.STRING,
    },
    departamento: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Usuarios', // Nombre del modelo
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
  }
);



module.exports = UserModel;