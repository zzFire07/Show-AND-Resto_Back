const ShowService = require('../services/showService.js');

// Controlador para obtener un show por su ID

async function findAllShow(req, res) {
  try {
    const allShows = await ShowService.findAllShow(); 
    if (allShows) {
      return res.status(200).json(allShows);
    } else {
      return res.status(404).json({ message: 'Ningún show ha sido encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los shows', error: error.message });
  }
}

async function createShow(req, res) {
  try {
    const { name, location, weblink, image } = req.body;

    // Llama al servicio para crear el show
    const newShow = await ShowService.createShow({
      name,
      location,
      weblink,
      image,
      id_departamento
    });

    if (newShow) {
      return res.status(200).json(newShow);
    } else {
      return res.status(404).json({ message: 'Ya existe un show con esos parámetros' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el show.', error: error.message });
  }
}


// Controlador para eliminar un show por su id
async function deleteShow(req, res) {
    const showId = req.params.showId;
  
    try {
      // Llamamos al servicio para eliminar el show de la base de datos
      await ShowService.deleteShow(showId);
  
      // Devolvemos una respuesta indicando que se eliminó correctamente
      return res.status(200).json({ message: 'Show eliminado correctamente' });
    } catch (error) {
      // Si hay algún error devolvemos un mensaje de error detallado (500: error del servidor)
      return res.status(500).json({ message: 'Error al eliminar el show', error: error.message });
    }
  }

// Controlador para actualizar un show
async function updateShow(req, res) {
    const showId = req.params.showId;
  
    try {
      // Extraemos los datos que nos pasen (JSON)
      const { nombre, fecha, weblink, image, id_departamento} = req.body;
  
      // Creamos un objeto con los datos actualizados
      const newData = {
        nombre,
        fecha,
        weblink,
        image,
        id_departamento
      };
  
      // Llamamos al servicio para actualizar el show en la base de datos
      const updatedShow = await ShowService.updateShow(showId, newData);
  
      // Devolvemos una respuesta con estado 200 (éxito) y el show actualizado
      return res.status(200).json(updatedShow);
    } catch (error) {
      // Si ocurre algún error devolvemos un mensaje (500: error del servidor) 
      return res.status(500).json({ message: 'Error al actualizar el show', error: error.message });
    }
  }

async function findByIdShow(req, res) {
  const showId = req.params.showId;
  try {
    // Llama al servicio para crear el show
    const findShow = await ShowService.findByIdShow(showId);
    
    if (findShow) {
      return res.status(200).json(findShow);
    } else {
      return res.status(404).json({ message: 'Ningún show ha sido encontrado con ese id' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al encontrar el show', error: error.message });
  }
}

module.exports = {
  findAllShow,
  createShow,
  deleteShow,
  updateShow,
  findByIdShow,
};
