const RestauranteService = require('../services/restauranteService.js');

// Controlador para obtener un usuario por su ID

async function findAll(req, res) {
  try {
    const allRestaurantes = await RestauranteService.findAll(); 
    if (allRestaurantes) {
      return res.status(200).json(allRestaurantes);
    } else {
      return res.status(404).json({ message: 'Ningún restaurant ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los restaurantes', error: error.message });
  }
}

async function createRestaurante(req, res) {
  try {
    const { name, location, weblink, image, id_departamento} = req.body;

    // Llama al servicio para crear el restaurante
    const newRestaurante = await RestauranteService.createRestaurante({
      name,
      location,
      weblink,
      image,
      id_departamento
    });


    if (newRestaurante) {
      return res.status(200).json(newRestaurante);
    } else {
      return res.status(404).json({ message: 'Ya existe un restaurante con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el restaurante.', error: error.message });
  }
}


async function deleteRestaurante(req, res) {
  const restauranteId = req.params.restauranteId;

  if (!restauranteId) {
    return res.status(400).json({ message: 'El id del restaurante es requerido' });
  }

  try {
    // Llama al servicio para crear el restaurante
    const deletedRestaurante = await RestauranteService.deleteRestaurante(restauranteId);
    
    if (deletedRestaurante) {
      return res.status(200).json("El restaurante ha sido eliminado exitosamente");
    } else {
      return res.status(404).json({ message: 'Ningún restaurante ha sido encontrado con ese id para eliminarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el restaurante', error: error.message });
  }
}

async function updateRestaurante(req, res) {
  const restaurantId = req.params.restaurantId;

  if (!restaurantId) {
    return res.status(400).json({ message: 'El id del restaurante es requerido' });
  }
  if (!req.body) {
    return res.status(400).json({ message: 'Los datos del restaurante son requeridos' });
  }
  try {
    const { name, location, weblink, image, id_departamento } = req.body;

    // Llama al servicio para crear el restaurante
    const updatedRestaurant = await RestaurantService.updateRestaurant(restaurantId,{
      name,
      location,
      weblink,
      image,
      id_departamento
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

async function findByIdRestaurante(req, res) {
  const restauranteId = req.params.restauranteId;
  if(!restauranteId) {
    return res.status(400).json({ message: 'El id del restaurante es requerido' });
  }
  try {
    // Llama al servicio para crear el restaurante
    const findRestaurante = await RestauranteService.findByIdRestaurante(restauranteId);
    
    if (findRestaurante) {
      return res.status(200).json(findRestaurante);
    } else {
      return res.status(404).json({ message: 'Ningún restaurante ha sido encontrado con ese id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al encontrar el restaurante', error: error.message });
  }
}

module.exports = {
  findAll,
  createRestaurante,
  deleteRestaurante,
  updateRestaurante,
  findByIdRestaurante,
};
