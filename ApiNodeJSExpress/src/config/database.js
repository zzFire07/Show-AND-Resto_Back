require("dotenv").config();
// config/database.js
const { Sequelize } = require('sequelize');

const DATABASE_URL = "postgresql://sardb_owner:npg_CUK6cw9yezVS@ep-spring-truth-a5zp7cb9-pooler.us-east-2.aws.neon.tech/sardb?sslmode=require";

// Configura los datos de conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(DATABASE_URL, {logging: console.log,});

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
