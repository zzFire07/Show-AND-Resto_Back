const UserModel = require('../models/userModel');

// Servicio para obtener un usuario por su ID
async function getUserById(userId) {
  try {
    console.log(userId)
    const user = await UserModel.findByPk(userId);
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
}

module.exports = {
  getUserById,
};
