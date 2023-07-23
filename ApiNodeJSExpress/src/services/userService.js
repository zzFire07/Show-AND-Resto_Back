const { or } = require('sequelize');
const UserModel = require('../models/userModel.js');

// Servicio para obtener un usuario por su ID
async function getUserById(userId) {
  try {
    console.log(userId);
    const user = await UserModel.findByPk(userId); 
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
}

async function findAll() {
  try {
    const allUsers = await UserModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allUsers;
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
}

async function searchByUser(userName) {
  try {
    //console.log(userName);
    const users = await UserModel.findOne({where: {usuario:userName}});
    //console.log(users);
    return users;
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
}

module.exports = {
  getUserById,
  findAll,
  searchByUser,
};
