const DrinkTypeService = require('../services/drinkTypeService.js');

// Controlador para crear un tipo de bebida
async function createDrinkType(req, res) {
  try {
    const {nombre} = req.body;

    // Llama al servicio para crear el tipo de bebida
    const newDrinkType = await DrinkTypeService.createDrinkType({
      nombre,
    });

    if (newDrinkType) {
      return res.status(200).json(newDrinkType);
    } else {
      return res.status(404).json({ message: 'Ya existe un tipo de bebida con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el tipo de bebida', error: error.message });
  }
}

// Controlador para eliminar un tipo de bebida
async function deleteDrinkType(req, res) {
  const drinkTypeId = req.params.drinkTypeId;
  try {
    
    // Llama al servicio para eliminar el tipo de bebida
    const deletedDrinkType = await DrinkTypeService.deleteDrinkType(drinkTypeId);
    
    if (deletedDrinkType) {
      return res.status(200).json("El tipo de bebida ha sido eliminado exitosamente");
    } else {
      return res.status(404).json({ message: 'Ningún tipo de bebida ha sido encontrado con ese id para eliminarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tipo de bebida', error: error.message });
  }
}

// Controlador para actualizar un tipo de bebida
async function updateDrinkType(req, res) {
  const drinkTypeId = req.params.drinkTypeId;
  try {
    const { nombre } = req.body;

    // Llama al servicio para actualizar el tipo de bebida
    const updatedDrinkType = await DrinkTypeService.updateDrinkType(drinkTypeId,{
      nombre,
    });

    if (updatedDrinkType) {
      return res.status(200).json(updatedDrinkType);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de bebida ha sido encontrado con ese id para actualizarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tipo de bebida', error: error.message });
  }
}

// Controlador para encontrar un tipo de bebida por su id
async function findByIdDrinkType(req, res) {
  const drinkTypeId = req.params.drinkTypeId;
  try {
    const findDrinkType = await DrinkTypeService.findByIdDrinkType(drinkTypeId);
    
    if (findDrinkType) {
      return res.status(200).json(findDrinkType);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de bebida ha sido encontrado con ese id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al encontrar el tipo de bebida', error: error.message });
  }
}

// Controlador para obtener todos los tipos de bebida
async function findAllDrinkType(req, res) {
  try {
    const allDrinkTypes = await DrinkTypeService.findAllDrinkType(); 
    if (allDrinkTypes) {
      return res.status(200).json(allDrinkTypes);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de bebida ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los tipos de bebida', error: error.message });
  }
}

module.exports = {
  createDrinkType,
  deleteDrinkType,
  updateDrinkType,
  findByIdDrinkType,
  findAllDrinkType,
};
