const { or } = require('sequelize');
const RestauranteModel = require('../models/restauranteModel.js');

// Servicio para obtener un usuario por su ID

async function findAll() {
  try {
    const allRestaurantes = await RestauranteModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allRestaurantes;
  } catch (error) {
    throw new Error('Error al obtener el restaurante desde la base de datos');
  }
}

async function createRestaurante(data) {
  try {
    // Consulta para obtener el último ID en la tabla de restaurantes

    const { name, location, weblink, image, id_departamento } = data;

    // Crea el restaurante en la base de datos utilizando el modelo y el nuevo ID
    const newRestaurante = await RestauranteModel.create({
      name,
      location,
      weblink,
      image,
      id_departamento
    });

    // Devuelve el restaurante creado
    return newRestaurante;
  } catch (error) {
    throw new Error('Error al crear el restaurante desde el JSON');
  }
}

async function deleteRestaurante(restauranteId) {
  try {
    // Crea el restaurante en la base de datos utilizando el modelo
    const deletedRestaurante = await RestauranteModel.destroy( {where:{id:restauranteId}} )

    // Devuelve el restaurante creado
    return deletedRestaurante;
  } catch (error) {
    throw new Error('Error al crear el restaurante desde el JSON');
  }
}

async function updateRestaurante(restauranteId,data) {
  try {
    const { name, location, weblink, image, id_departamento } = data;

    // Crea el restaurante en la base de datos utilizando el modelo
    const findRestaurante = await RestauranteModel.findByPk(restauranteId)
        
    const updatedRestaurante = await findRestaurante.update({
      name,
      location,
      weblink,
      image,
      id_departamento
    });

    // Devuelve el restaurante creado
    return updatedRestaurante;
  } catch (error) {
    throw new Error('Error al modificar el restaurante desde el JSON');
  }
}

async function findByIdRestaurante(restauranteId) {
  try {
    const findRestaurante = await RestauranteModel.findByPk(restauranteId); 
    return findRestaurante;
  } catch (error) {
    throw new Error('Error al obtener el restaurante desde la base de datos');
  }
}


module.exports = {
  findAll,
  createRestaurante,
  deleteRestaurante,
  updateRestaurante,
  findByIdRestaurante,
};
