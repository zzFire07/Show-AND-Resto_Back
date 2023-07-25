const UserService = require('../services/userService.js');

// Controlador para obtener un usuario por su ID
async function getUserById(req, res) {
  const userId = req.params.userId;

  try {
    const user = await UserService.getUserById(userId);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
  }
}

async function findAll(req, res) {
  try {
    const allRestaurants = await UserService.findAll(); 
    if (allRestaurants) {
      return res.status(200).json(allRestaurants);
    } else {
      return res.status(404).json({ message: 'Ningún usuario ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
}

async function searchByUser(req, res) {
  const userName = req.params.userName;
  try {
    const users = await UserService.searchByUser(userName); 
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).json({ message: 'Ningún usuario ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
}

module.exports = {
  getUserById,
  findAll,
  searchByUser,
};
