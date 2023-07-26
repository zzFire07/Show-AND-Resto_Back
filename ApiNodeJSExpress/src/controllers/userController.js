const UserService = require('../services/userService.js');


// Controlador para eliminar un usuario por su id
async function deleteUser(req, res) {
  const userId = req.params.userId;

  try {
    // Llamamos al servicio para eliminar el usuario de la base de datos
    await UserService.deleteUser(userId);

    // Devolvemos una respuesta indicando que el usuario se eliminó correctamente
    return res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    // Si hay algún error devolvemos un mensaje de error detallado (500: error del servidor)
    return res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
}

// Controlador para obtener un usuario por su ID
async function findByIdUser(req, res) {
  const userId = req.params.userId;

  try {
    const user = await UserService.findByIdUser(userId);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
  }
}

async function findAllUser(req, res) {
  try {
    const allUsers = await UserService.findAllUser(); 
    if (allUsers) {
      return res.status(200).json(allUsers);
    } else {
      return res.status(404).json({ message: 'Ningún usuario ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
}


module.exports = {
  deleteUser,
  findByIdUser,
  findAllUser,
};
