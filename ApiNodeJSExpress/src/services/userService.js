const { or } = require('sequelize');
const UserModel = require('../models/userModel.js');


// Servicio para crear un nuevo usuario
async function createUser(userData) {
  try {
    // Creamos un nuevo usuario en la base de datos usando el modelo UserModel

    //const user = await UserModel.findByPk(userId);

    const lastUser = await UserModel.findOne({
      order: [['id', 'DESC']],
    });

    const newId = lastUser.id + 1;

    const newUser = await UserModel.create({
      id:newId,
      userData,
    });

    // Devolvemos el usuario recién creado
    return newUser;
  } catch (error) {
    // Si ocurre algún error, lanzamos un error indicando que no se pudo crear el usuario
    throw new Error('Error al crear el usuario');
  }
}

// Servicio para eliminar un usuario por su ID
async function deleteUser(userId) {
  try {
    // Buscamos el usuario por su ID
    const user = await UserModel.findByPk(userId);

    // Si el usuario no existe, lanzamos un error indicando que no se encontró el usuario
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // De lo contrario, eliminamos el usuario de la base de datos
    await user.destroy();

    // Devolvemos un mensaje indicando que se elimino de forma correcta
    return { message: 'Usuario eliminado correctamente' };
  } catch (error) {
    // Si hay algún error devolvemos un mensaje (500: error del servidor)
    throw new Error('Error al eliminar el usuario');
  }
}

// Servicio para actualizar un usuario por su ID
async function updateUser(userId, newData) {
  try {
    // Buscamos el usuario por su ID
    const user = await UserModel.findByPk(userId);

    // Si no existe el usuario, lanzamos un error indicando que no se pudo encontrar 
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Actualizamos los datos del usuario con los nuevos datos 
    await user.update(newData);

    // Devolvemos el usuario actualizado
    return user;
  } catch (error) {
    // En caso de que no se haya realizado la operacion, lanzamos un error indicando que no se pudo actualizar el usuario
    throw new Error('Error al actualizar el usuario');
  }
}

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
  createUser,
  deleteUser,
  updateUser,
  findByIdUser,
  findAllUser,
};
