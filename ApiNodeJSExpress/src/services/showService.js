const { or } = require('sequelize');
const ShowModel = require('../models/showModel.js');


// Servicio para crear un nuevo show
async function createShow(data) {
  try {

    const { name, location, weblink, image  } = data;

    // Crea el show en la base de datos utilizando el modelo y el nuevo ID
    const newShow = await ShowModel.create({
      name,
      location,
      weblink,
      image,
    });

    // Devuelve el show creado
    return newShow;
  } catch (error) {
    throw new Error('Error al crear el show desde el JSON');
  }
}

// Servicio para eliminar un show por su ID
async function deleteShow(showId) {
  try {
    // Buscamos el show por su ID
    const show = await ShowModel.findByPk(showId);

    // Si el show no existe, lanzamos un error indicando que no se encontró
    if (!show) {
      throw new Error('Show no encontrado');
    }

    // De lo contrario, eliminamos el show de la base de datos
    await show.destroy();

    // Devolvemos un mensaje indicando que se elimino de forma correcta
    return { message: 'Show eliminado correctamente' };
  } catch (error) {
    // Si hay algún error devolvemos un mensaje (500: error del servidor)
    throw new Error('Error al eliminar el show');
  }
}

// Servicio para actualizar un show por su ID
async function updateShow(showId, newData) {
  try {
    // Buscamos el show
    const show = await ShowModel.findByPk(showId);

    // Si no existe, lanzamos un error indicando que no se pudo encontrar 
    if (!show) {
      throw new Error('Show no encontrado');
    }

    // Actualizamos los datos del show 
    await show.update(newData);

    // Devolvemos el show actualizado
    return show;
  } catch (error) {
    // En caso de que no se haya realizado la operacion, lanzamos un error indicando que no se pudo actualizar
    throw new Error('Error al actualizar el show');
  }
}

// Servicio para obtener un show por su ID
async function findByIdShow(showId) {
  try {
    console.log(showId);
    const show = await ShowModel.findByPk(showId); 
    return show;
  } catch (error) {
    throw new Error('Error al obtener el show desde la base de datos');
  }
}

async function findAllShow() {
  try {
    const allShows = await ShowModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allShows;
  } catch (error) {
    throw new Error('Error al obtener el show desde la base de datos');
  }
}

module.exports = {
  createShow,
  deleteShow,
  updateShow,
  findByIdShow,
  findAllShow,
};
