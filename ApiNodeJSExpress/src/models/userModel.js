const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class UserModel extends Model {}

UserModel.init(
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
    usuario: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    ciudad: {
      type: DataTypes.STRING,
    },
    ci:{
      type: DataTypes.STRING,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'Usuarios', // Nombre del modelo
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
  }
);



module.exports = UserModel;

