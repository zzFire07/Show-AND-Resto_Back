const tipoComidaService = require('../services/tipoComidaService.js');

// Controlador para obtener un usuario por su ID

async function findAll(req, res) {
  try {
    const allTipoComida = await tipoComidaService.findAll(); 
    if (allTipoComida) {
      return res.status(200).json(allTipoComida);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los tipos de comida', error: error.message });
  }
}

async function createTipoComida(req, res) {
  try {
    const {name} = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    // Llama al servicio para crear el tipo de comida
    const newTipoComida = await tipoComidaService.createTipoComida({
      name,
    });

    if (newTipoComida) {
      return res.status(200).json(newTipoComida);
    } else {
      return res.status(409).json({ message: 'Ya existe un tipo de comida con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el tipo de comida', error: error.message });
  }
}


async function deleteTipoComida(req, res) {
  const tipoComidaId = req.params.tipoComidaId;

  if (!tipoComidaId) {
    return res.status(400).json({ message: 'El id es obligatorio' });
  }

  try {
    // Llama al servicio para eliminar el tipo de comida
    const deletedTipoComida = await tipoComidaService.deleteTipoComida(tipoComidaId);
    
    if (deletedTipoComida) {
      return res.status(200).json("El tipo de comida ha sido eliminado exitosamente");
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado con ese id para eliminarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tipo de comida', error: error.message });
  }
}

async function updateTipoComida(req, res) {
  const tipoComidaId = req.params.tipoComidaId;
  const { name } = req.body;

  if (!tipoComidaId) {
    return res.status(400).json({ message: 'El id es obligatorio' });
  }
  if (!name) {
    return res.status(400).json({ message: 'El nombre es obligatorio' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'El nombre debe tener al menos 3 caracteres' });
  }

  try {
    // Llama al servicio para actualizar el restaurante
    const updatedTipoComida = await tipoComidaService.updateTipoComida(tipoComidaId,{
      name,
    });

    if (updatedTipoComida) {
      return res.status(200).json(updatedTipoComida);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado con ese id para actualizarlo' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tipo de comida', error: error.message });
  }
}

async function findByIdTipoComida(req, res) {
  const tipoComidaId = req.params.tipoComidaId;
  if (!tipoComidaId) {
    return res.status(400).json({ message: 'El id es obligatorio' });
  }

  try {
    const findTipoComida = await tipoComidaService.findByIdTipoComida(tipoComidaId);
    
    if (findTipoComida) {
      return res.status(200).json(findTipoComida);
    } else {
      return res.status(404).json({ message: 'Ningún tipo de comida ha sido encontrado con ese id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al encontrar el tipo de comida', error: error.message });
  }
}

module.exports = {
  findAll,
  createTipoComida,
  deleteTipoComida,
  updateTipoComida,
  findByIdTipoComida,
};
