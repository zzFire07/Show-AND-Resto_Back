const RestaurantService = require('../services/restaurantService.js');

// Controlador para obtener un usuario por su ID

async function findAll(req, res) {
  try {
    const allRestaurants = await RestaurantService.findAll(); 
    if (allRestaurants) {
      return res.status(200).json(allRestaurants);
    } else {
      return res.status(404).json({ message: 'Ningún restaurant ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los restaurantes', error: error.message });
  }
}

async function createRestaurant(req, res) {
  try {
    const {nombre, direccion, ciudad, pais, capacidad } = req.body;

    // Llama al servicio para crear el restaurante
    const newRestaurant = await RestaurantService.createRestaurant({
      nombre,
      direccion,
      ciudad,
      pais,
      capacidad,
    });

    if (newRestaurant) {
      return res.status(200).json(newRestaurant);
    } else {
      return res.status(404).json({ message: 'Ya existe un restaurante con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el restaurante.', error: error.message });
  }
}


async function deleteRestaurant(req, res) {
  const restaurantId = req.params.restaurantId;
  try {
    
    // Llama al servicio para crear el restaurante
    const deletedRestaurant = await RestaurantService.deleteRestaurant(restaurantId);
    
    if (deletedRestaurant) {
      return res.status(200).json("El restaurante ha sido eliminado exitosamente");
    } else {
      return res.status(404).json({ message: 'Ningún restaurante ha sido encontrado con ese id para eliminarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el restaurante', error: error.message });
  }
}

async function updateRestaurant(req, res) {
  const restaurantId = req.params.restaurantId;
  try {
    const { nombre, direccion, ciudad, pais, capacidad } = req.body;

    // Llama al servicio para crear el restaurante
    const updatedRestaurant = await RestaurantService.updateRestaurant(restaurantId,{
      nombre,
      direccion,
      ciudad,
      pais,
      capacidad,
    });

    if (updatedRestaurant) {
      return res.status(200).json(updatedRestaurant);
    } else {
      return res.status(404).json({ message: 'Ningún restaurante ha sido encontrado con ese id para actualizarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el restaurante.', error: error.message });
  }
}

async function findByIdRestaurant(req, res) {
  const restaurantId = req.params.restaurantId;
  try {
    // Llama al servicio para crear el restaurante
    const findRestaurant = await RestaurantService.findByIdRestaurant(restaurantId);
    
    if (findRestaurant) {
      return res.status(200).json(findRestaurant);
    } else {
      return res.status(404).json({ message: 'Ningún restaurante ha sido encontrado con ese id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al encontrar el restaurante', error: error.message });
  }
}

module.exports = {
  findAll,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  findByIdRestaurant,
};
