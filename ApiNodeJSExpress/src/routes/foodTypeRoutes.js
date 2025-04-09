const { Router } = require('express');
const router = Router();

const FoodTypeController = require('../controllers/foodTypeController');

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
 * /createFoodType:
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
 *            nombre:
 *              type: string
 *  responses:
 *   200:
 *     description: Tipo de comida creado exitosamente.
 *   400:
 *     description: Error al crear el tipo de comida.
 *   409:
 *     description: Tipo de comida ya existe.
 *   500:
 *     description: Error interno del servidor.
 */
router.post('/createFoodType', FoodTypeController.createFoodType); //Especificar post en postman

// Ruta para eliminar un tipo de comida
/**
 * @swagger
 * /deleteFoodType/{foodTypeId}:
 *   delete:
 *     summary: Elimina un tipo de comida por su ID
 *     tags: [Tipos de comida]
 *     parameters:
 *       - name: foodTypeId
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
router.delete('/deleteFoodType/:foodTypeId', FoodTypeController.deleteFoodType); //Especificar delete en postman

// Ruta para actualizar un tipo de comida por su ID
/**
 * @swagger
 * /updateFoodType/{foodTypeId}:
 *   get:
 *     summary: Actualiza un tipo de comida por su ID
 *     tags: [Tipos de comida]
 *     parameters:
 *       - name: foodTypeId
 *         in: path
 *         required: true
 *         description: ID del tipo de comida a actualizar
 *         type: integer
 *     requestBody:
 *         required: true
 *         description: Datos del tipo de comida a actualizar
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *           properties:
 *            nombre:
 *             type: string
 *             description: Nombre del tipo de comida
 *             example: "Comida Italiana"
 *     responses:
 *       200:
 *         description: Tipo de comida encontrado
 *       404:
 *         description: Tipo de comida no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/updateFoodType/:foodTypeId', FoodTypeController.updateFoodType); //Especificar put en postman

/**
 * @swagger
 * /findByIdFoodType/{foodTypeId}:
 *   get:
 *     summary: Obtiene un tipo de comida por su ID
 *     tags: [Tipos de comida]
 *     parameters:
 *       - name: foodTypeId
 *         in: path
 *         required: true
 *         description: ID del show a buscar
 *         type: integer
 *     responses:
 *       200:
 *         description: Show encontrado
 *       404:
 *         description: Show no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/findByIdFoodType/:foodTypeId', FoodTypeController.findByIdFoodType)

/**
 * @swagger
 * /findAllFoodType:
 *   get:
 *     summary: Obtiene todos los tipos de comida
 *     tags: [Tipos de comida]
 *     responses:
 *      200:
 *        description: Lista de shows
 *      404:
 *        description: No se encontraron shows
 *      500:
 *        description: Error interno del servidor
 */
router.get('/findAllFoodType', FoodTypeController.findAll);

module.exports = router;