const FoodTypeService = require('../services/foodTypeService.js');

// Controlador para obtener un usuario por su ID

async function findAll(req, res) {
  try {
    const allFoodTypes = await FoodTypeService.findAll(); 
    if (allFoodTypes) {
      return res.status(200).json(allFoodTypes);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los tipos de comida', error: error.message });
  }
}

async function createFoodType(req, res) {
  try {
    const {nombre} = req.body;

    if (!nombre) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    // Llama al servicio para crear el tipo de comida
    const newFoodType = await FoodTypeService.createFoodType({
      nombre,
    });

    if (newFoodType) {
      return res.status(200).json(newFoodType);
    } else {
      return res.status(409).json({ message: 'Ya existe un tipo de comida con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el tipo de comida', error: error.message });
  }
}


async function deleteFoodType(req, res) {
  const foodTypeId = req.params.foodTypeId;

  if (!foodTypeId) {
    return res.status(400).json({ message: 'El id es obligatorio' });
  }

  try {
    // Llama al servicio para eliminar el tipo de comida
    const deletedFoodType = await FoodTypeService.deleteFoodType(foodTypeId);
    
    if (deletedFoodType) {
      return res.status(200).json("El tipo de comida ha sido eliminado exitosamente");
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado con ese id para eliminarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tipo de comida', error: error.message });
  }
}

async function updateFoodType(req, res) {
  const foodTypeId = req.params.foodTypeId;
  const { nombre } = req.body;

  if (!foodTypeId) {
    return res.status(400).json({ message: 'El id es obligatorio' });
  }
  if (!nombre) {
    return res.status(400).json({ message: 'El nombre es obligatorio' });
  }
  if (nombre.length < 3) {
    return res.status(400).json({ message: 'El nombre debe tener al menos 3 caracteres' });
  }

  try {
    // Llama al servicio para actualizar el restaurante
    const updatedFoodType = await FoodTypeService.updateFoodType(foodTypeId,{
      nombre,
    });

    if (updatedFoodType) {
      return res.status(200).json(updatedFoodType);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado con ese id para actualizarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tipo de comida', error: error.message });
  }
}

async function findByIdFoodType(req, res) {
  const foodTypeId = req.params.foodTypeId;
  if (!foodTypeId) {
    return res.status(400).json({ message: 'El id es obligatorio' });
  }

  try {
    const findFoodType = await FoodTypeService.findByIdFoodType(foodTypeId);
    
    if (findFoodType) {
      return res.status(200).json(findFoodType);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado con ese id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al encontrar el tipo de comida', error: error.message });
  }
}

module.exports = {
  findAll,
  createFoodType,
  deleteFoodType,
  updateFoodType,
  findByIdFoodType,
};
