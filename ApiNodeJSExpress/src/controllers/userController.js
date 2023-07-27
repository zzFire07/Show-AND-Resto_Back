const UserService = require('../services/userService.js');

// Controlador para crear un nuevo usuario
async function createUser(req, res) {
  try {
    const {nombre, apellido, ci, telefono, ciudad, pais, departamento } = req.body;

    // Llama al servicio para crear el usuario
    const newUser = await UserService.createUser({
      nombre,
      apellido,
      ci,
      telefono,
      ciudad,
      pais,
      departamento,
    });

    if (newUser) {
      return res.status(200).json(newUser);
    } else {
      return res.status(404).json({ message: 'Ya existe un usuario con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario.', error: error.message });
  }
}

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

// Controlador para actualizar un usuario
async function updateUser(req, res) {
  const userId = req.params.userId;

  try {
    // Extraemos los datos que nos pasen (JSON)
    const { nombre, apellido, ci, telefono, ciudad, pais, departamento } = req.body;

    // Creamos un objeto con los datos actualizados del usuario
    const newData = {
      nombre,
      apellido,
      ci,
      telefono,
      ciudad,
      pais,
      departamento,
    };

    // Llamamos al servicio para actualizar el usuario en la base de datos
    const updatedUser = await UserService.updateUser(userId, newData);

    // Devolvemos una respuesta con estado 200 (éxito) y el usuario actualizado
    return res.status(200).json(updatedUser);
  } catch (error) {
    // Si ocurre algún error devolvemos un mensaje (500: error del servidor) 
    return res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
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
  createUser,
  deleteUser,
  updateUser,
  findByIdUser,
  findAllUser,
};
