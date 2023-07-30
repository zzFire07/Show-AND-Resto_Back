const { or } = require('sequelize');
const DrinkTypeModel = require('../models/drinkTypeModel.js');

// Servicio para crear un tipo de bebida
async function createDrinkType(data) {
  try {
    const { nombre } = data;

    // Crea el tipo de bebida en la base de datos utilizando el modelo
    const newDrinkType = await DrinkTypeModel.create({
      nombre,
    });

    return newDrinkType;
  } catch (error) {
    throw new Error('Error al crear el tipo de bebida desde el JSON');
  }
}

// Servicio para eliminar un tipo de bebida
async function deleteDrinkType(drinkTypeId) {
  try {
    const deletedDrinkType = await DrinkTypeModel.destroy( {where:{id:drinkTypeId}} )

    return deletedDrinkType;
  } catch (error) {
    throw new Error('Error al borrar el tipo de bebida');
  }
}

// Servicio para actualizar un tipo de bebida
async function updateDrinkType(drinkTypeId,data) {
  try {
    const { nombre } = data;

    const findDrinkType = await DrinkTypeModel.findByPk(drinkTypeId)
        
    const updatedDrinkType = await findDrinkType.update({
      nombre,
    });

    return updatedDrinkType;
  } catch (error) {
    throw new Error('Error al modificar el tipo de bebida desde el JSON');
  }
}

// Servicio para obtener un tipo de bebida por su id
async function findByIdDrinkType(drinkTypeId) {
  try {
    const findDrinkType = await DrinkTypeModel.findByPk(drinkTypeId); 
    
    return findDrinkType;
  } catch (error) {
    throw new Error('Error al obtener el tipo de bebida desde la base de datos');
  }
}

// Servicio para obtener todos los tipos de bebida
async function findAllDrinkType() {
    try {
      const allDrinkTypes = await DrinkTypeModel.findAll({
        order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
      });
      return allDrinkTypes;
    } catch (error) {
      throw new Error('Error al obtener el tipo de bebida desde la base de datos');
    }
  }


module.exports = {
  createDrinkType,
  deleteDrinkType,
  updateDrinkType,
  findByIdDrinkType,
  findAllDrinkType,
};
