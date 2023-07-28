const { or } = require('sequelize');
const FoodTypeModel = require('../models/foodTypeModel.js');

// Servicio para obtener un usuario por su ID

async function findAll() {
  try {
    const allFoodTypes = await FoodTypeModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allFoodTypes;
  } catch (error) {
    throw new Error('Error al obtener el tipo de comida desde la base de datos');
  }
}

async function createFoodType(data) {
  try {
    const { nombre } = data;

    // Crea el restaurante en la base de datos utilizando el modelo y el nuevo ID
    const newFoodType = await FoodTypeModel.create({
      nombre,
    });

    // Devuelve el restaurante creado
    return newFoodType;
  } catch (error) {
    throw new Error('Error al crear el tipo de comida desde el JSON');
  }
}

async function deleteFoodType(foodTypeId) {
  try {
    const deletedFoodType = await FoodTypeModel.destroy( {where:{id:foodTypeId}} )

    // Devuelve el restaurante creado
    return deletedFoodType;
  } catch (error) {
    throw new Error('Error al crear el tipo de comida desde el JSON');
  }
}

async function updateFoodType(foodTypeId,data) {
  try {
    const { nombre } = data;

    const findFoodType = await FoodTypeModel.findByPk(foodTypeId)
        
    const updatedFoodType = await findFoodType.update({
      nombre,
    });

    // Devuelve el restaurante creado
    return updatedFoodType;
  } catch (error) {
    throw new Error('Error al modificar el tipo de comida desde el JSON');
  }
}

async function findByIdFoodType(foodTypeId) {
  try {
    const findFoodType = await FoodTypeModel.findByPk(foodTypeId); 
    
    return findFoodType;
  } catch (error) {
    throw new Error('Error al obtener el tipo de comida desde la base de datos');
  }
}


module.exports = {
  findAll,
  createFoodType,
  deleteFoodType,
  updateFoodType,
  findByIdFoodType,
};
