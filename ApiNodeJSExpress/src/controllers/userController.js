const UserService = require('../services/userService');

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

module.exports = {
  getUserById,
};
