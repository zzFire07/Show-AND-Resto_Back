const { Router } = require('express');
const router = Router();

const RestauranteController = require('../controllers/restauranteController');

/**
 * @swagger
 * tags:
 *  name: Restaurantes
 *  description: API para gestionar los restaurantes
 */

// Ruta para crear un nuevo restaurante
/**
 * @swagger
 * /createRestaurante:
 *   post:
 *    summary: Crea un nuevo restaurante
 *    tags: [Restaurantes]
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *          location:
 *           type: string
 *          weblink:
 *           type: string
 *          image:
 *           type: string
 *          id_departamento:
 *           type: integer
 * 
 *    responses:
 *     200:
 *      description: Restaurante creado
 *     400:
 *      description: Error al crear el restaurante
 *     500:
 *      description: Error interno del servidor
 */
router.post('/createRestaurante', RestauranteController.createRestaurante); //Especificar post en postman

// Ruta para eliminar un restaurante por su ID
/**
 * @swagger
 * /deleteRestaurante/{restauranteId}:
 *   delete:
 *    summary: Elimina un restaurante por su ID
 *    tags: [Restaurantes]
 *    parameters:
 *      - name: restauranteId
 *        in: path
 *        required: true
 *        description: ID del restaurante a eliminar
 * 
 *    responses:
 *     200:
 *      description: Restaurante eliminado
 *     400:
 *      description: Error al eliminar el restaurante.
 *     404:
 *      description: Restaurante no encontrado.
 *     500:
 *      description: Error interno del servidor
 */
router.delete('/deleteRestaurante/:restauranteId', RestauranteController.deleteRestaurante); //Especificar delete en postman

// Ruta para actualizar un restaurante por su ID
/**
 * @swagger
 * /updateRestaurante/{restauranteId}:
 *   put:
 *    summary: Actualiza un restaurante por su ID
 *    tags: [Restaurantes]
 *    parameters:
 *      - name: restauranteId
 *        in: path
 *        required: true
 *        description: ID del restaurante a actualizar
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *          location:
 *           type: string
 *          weblink:
 *           type: string
 *          image:
 *           type: string
 *          id_departamento:
 *           type: integer
 *
 *   responses:
 *    200:
 *     description: Restaurante actualizado
 *    400:
 *     description: Error al actualizar el restaurante
 *    404:
 *     description: Restaurante no encontrado.
 *    500:
 *     description: Error interno del servidor
 */
router.put('/updateRestaurante/:restauranteId', RestauranteController.updateRestaurante); //Especificar put en postman

// Ruta para obtener un Restaurante por su ID
/**
 * @swagger
 * /findByIdRestaurante/{restauranteId}:
 *   get:
 *    summary: Obtiene un restaurante por su ID
 *    tags: [Restaurantes]
 *    parameters:
 *      - name: restauranteId
 *        in: path
 *        required: true
 *        description: ID del restaurante a obtener
 *
 *   responses:
 *    200:
 *     description: Restaurante encontrado
 *    400:
 *     description: Error al obtener el restaurante
 *    404:
 *     description: Restaurante no encontrado.
 *    500:
 *     description: Error interno del servidor
 */
router.get('/findByIdRestaurante/:restauranteId', RestauranteController.findByIdRestaurante)

// Ruta para obtener todos los restaurantes
/**
 * @swagger
 * /findAllRestaurante:
 *  get:
 *   summary: Obtiene todos los restaurantes
 *   tags: [Restaurantes]
 *   responses:
 *    200:
 *     description: Lista de restaurantes
 *    400:
 *     description: Error al obtener los restaurantes
 *    404:
 *     description: No se encontraron restaurantes.
 *    500:
 *     description: Error interno del servidor
 */
router.get('/findAllRestaurante', RestauranteController.findAll);

 
module.exports = router;