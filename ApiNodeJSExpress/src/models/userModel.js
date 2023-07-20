const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserModel = db.define('usuario', {
  // Definición de los campos del modelo de usuario
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  // Otros campos del usuario (puedes agregar más según tus necesidades)
});

module.exports = UserModel;
