require("dotenv").config();
// config/database.js
const { Sequelize } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;

// Configura los datos de conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(DATABASE_URL, {});

// Realiza la conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
})();

module.exports = sequelize;
