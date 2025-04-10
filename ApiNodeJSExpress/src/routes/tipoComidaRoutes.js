const { Router } = require('express');
const router = Router();

const tipoComidaController = require('../controllers/tipoComidaController.js'); //Importar el controlador de tipoComidaController

/**
 * @swagger
 * tags:
 *  name: Tipos de comida
 *  description: API para gestionar tipos de comida
 * 
 */

// Ruta para crear un nuevo tipo de comida
/**
 * @swagger
 * /createTipoComida:
 *  post:
 *   summary: Crear un nuevo tipo de comida
 *   tags: [Tipos de comida]
 *   requestBody:
 *    required: true
 *    description: Datos del tipo de comida a crear
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *   responses:
 *    200:
 *      description: Tipo de comida creado exitosamente.
 *    400:
 *      description: Error al crear el tipo de comida.
 *    409:
 *      description: Tipo de comida ya existe.
 *    500:
 *      description: Error interno del servidor.
 */
router.post('/createTipoComida', tipoComidaController.createTipoComida); //Especificar post en postman

// Ruta para eliminar un tipo de comida
/**
 * @swagger
 * /deleteTipoComida/{tipoComidaId}:
 *   delete:
 *     summary: Elimina un tipo de comida por su ID
 *     tags: [Tipos de comida]
 *     parameters:
 *       - name: tipoComidaId
 *         in: path
 *         required: true
 *         description: ID del tipo de comida a eliminar
 *         type: integer
 *     responses:
 *       200:
 *         description: Tipo de comida eliminado exitosamente
 *       404:
 *         description: Tipo de comida no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/deleteTipoComida/:tipoComidaId', tipoComidaController.deleteTipoComida); //Especificar delete en postman

// Ruta para actualizar un tipo de comida por su ID
/**
 * @swagger
 * /updateTipoComida/{tipoComidaId}:
 *   put:
 *     summary: Actualiza un tipo de comida por su ID
 *     tags: [Tipos de comida]
 *     parameters:
 *       - name: tipoComidaId
 *         in: path
 *         required: true
 *         description: ID del tipo de comida a actualizar
 *         type: integer
 *     requestBody:
 *         required: true
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            properties:
 *             name:
 *              type: string
 *              description: Nombre del tipo de comida
 *              example: "Comida Italiana"
 *     responses:
 *      200:
 *       description: Tipo de comida encontrado
 *      404:
 *       description: Tipo de comida no encontrado
 *      500:
 *       description: Error interno del servidor
 */
router.put('/updateTipoComida/:tipoComidaId', tipoComidaController.updateTipoComida); //Especificar put en postman

/**
 * @swagger
 * /findByIdTipoComida/{tipoComidaId}:
 *   get:
 *     summary: Obtiene un tipo de comida por su ID
 *     tags: [Tipos de comida]
 *     parameters:
 *       - name: tipoComidaId
 *         in: path
 *         required: true
 *         description: ID del tipo de comida a buscar
 *         type: integer
 *     responses:
 *       200:
 *         description: Tipo de comida encontrado
 *       404:
 *         description: Tipo de comida no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/findByIdTipoComida/:tipoComidaId', tipoComidaController.findByIdTipoComida)

/**
 * @swagger
 * /findAllTipoComida:
 *   get:
 *     summary: Obtiene todos los tipos de comida
 *     tags: [Tipos de comida]
 *     responses:
 *      200:
 *        description: Lista de Tipo de comidas
 *      404:
 *        description: No se encontraron Tipo de comidas
 *      500:
 *        description: Error interno del servidor
 */
router.get('/findAllTipoComida', tipoComidaController.findAll);

module.exports = router;