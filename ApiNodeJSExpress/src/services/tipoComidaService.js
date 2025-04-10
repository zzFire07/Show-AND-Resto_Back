const { or } = require('sequelize');
const tipoComidaModel = require('../models/tipoComidaModel.js');

// Servicio para obtener un usuario por su ID

async function findAll() {
  try {
    const allTipoComidas = await tipoComidaModel.findAll({
      order: [['id', 'ASC']], // Ordena por la columna 'id' de manera ascendente (de menor a mayor)
    });
    return allTipoComidas;
  } catch (error) {
    throw new Error('Error al obtener el tipo de comida desde la base de datos');
  }
}

async function createTipoComida(data) {
  try {
    const { name } = data;

    // Crea el restaurante en la base de datos utilizando el modelo y el nuevo ID
    const newTipoComida = await tipoComidaModel.create({
      nombre,
    });

    // Devuelve el restaurante creado
    return newTipoComida;
  } catch (error) {
    throw new Error('Error al crear el tipo de comida desde el JSON');
  }
}

async function deleteTipoComida(tipoComidaId) {
  try {
    const deletedTipoComida = await tipoComidaModel.destroy( {where:{id:tipoComidaId}} )

    // Devuelve el restaurante creado
    return deletedTipoComida;
  } catch (error) {
    throw new Error('Error al crear el tipo de comida desde el JSON');
  }
}

async function updateTipoComida(tipoComidaId,data) {
  try {
    const { name } = data;

    const findTipoComida = await tipoComidaModel.findByPk(tipoComidaId)
        
    const updatedTipoComida = await tipoComidaModel.update({
      name,
    });

    // Devuelve el restaurante creado
    return updatedTipoComida;
  } catch (error) {
    throw new Error('Error al modificar el tipo de comida desde el JSON');
  }
}

async function findByIdTipoComida(tipoComidaId) {
  try {
    const findTipoComida = await tipoComidaModel.findByPk(tipoComidaId); 
    
    return findTipoComida;
  } catch (error) {
    throw new Error('Error al obtener el tipo de comida desde la base de datos');
  }
}


module.exports = {
  findAll,
  createTipoComida,
  deleteTipoComida,
  updateTipoComida,
  findByIdTipoComida,
};
