// config/database.js
const { Sequelize } = require('sequelize');

// Configura los datos de conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost', // Cambia esto si tu base de datos está en un servidor remoto
  dialect: 'postgres', // Indica que estamos utilizando PostgreSQL
  logging: false, // Desactiva los logs de Sequelize
});



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
