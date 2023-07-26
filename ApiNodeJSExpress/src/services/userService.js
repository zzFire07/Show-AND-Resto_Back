const { or } = require('sequelize');
const UserModel = require('../models/userModel.js');

// Servicio para obtener un usuario por su ID
async function findByIdUser(userId) {
  try {
    console.log(userId);
    const user = await UserModel.findByPk(userId); 
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
}

async function findAllUser() {
  try {
    const allUsers = await UserModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allUsers;
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
}

module.exports = {
  findByIdUser,
  findAllUser,
};
