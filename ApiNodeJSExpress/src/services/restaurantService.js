const { or } = require('sequelize');
const RestaurantModel = require('../models/restaurantModel.js');

// Servicio para obtener un usuario por su ID

async function findAll() {
  try {
    const allRestaurants = await RestaurantModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allRestaurants;
  } catch (error) {
    throw new error;
  }
}

async function createRestaurant(data) {
  try {
    // Consulta para obtener el último ID en la tabla de restaurantes

    const { name, location, weblink, image, id_departamento } = data;

    // Crea el restaurante en la base de datos utilizando el modelo y el nuevo ID
    const newRestaurant = await RestaurantModel.create({
      name,
      location,
      weblink,
      image,
      id_departamento
    });

    // Devuelve el restaurante creado
    return newRestaurant;
  } catch (error) {
    throw new Error('Error al crear el restaurante desde el JSON');
  }
}

async function deleteRestaurant(restaurantId) {
  try {
    // Crea el restaurante en la base de datos utilizando el modelo
    const deletedRestaurant = await RestaurantModel.destroy( {where:{id:restaurantId}} )

    // Devuelve el restaurante creado
    return deletedRestaurant;
  } catch (error) {
    throw new Error('Error al crear el restaurante desde el JSON');
  }
}

async function updateRestaurant(restaurantId,data) {
  try {
    const { name, location, weblink, image, id_departamento } = data;

    // Crea el restaurante en la base de datos utilizando el modelo
    const findRestaurant = await RestaurantModel.findByPk(restaurantId)
        
    const updatedRestaurant = await findRestaurant.update({
      name,
      location,
      weblink,
      image,
      id_departamento
    });

    // Devuelve el restaurante creado
    return updatedRestaurant;
  } catch (error) {
    throw new Error('Error al modificar el restaurante desde el JSON');
  }
}

async function findByIdRestaurant(restaurantId) {
  try {
    const findRestaurant = await RestaurantModel.findByPk(restaurantId); 
    return findRestaurant;
  } catch (error) {
    throw new Error('Error al obtener el restaurante desde la base de datos');
  }
}


module.exports = {
  findAll,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
  findByIdRestaurant,
};
