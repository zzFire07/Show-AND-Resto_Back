const { Router } = require('express');
const router = Router();

const RestaurantController = require('../controllers/restaurantController');

/**
 * @swagger
 * tags:
 *  name: Restaurantes
 *  description: API para gestionar los restaurantes
 */

// Ruta para crear un nuevo restaurante
/**
 * @swagger
 * /createRestaurant:
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
 *          link:
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
router.post('/createRestaurant', RestaurantController.createRestaurant); //Especificar post en postman

// Ruta para eliminar un restaurante por su ID
/**
 * @swagger
 * /deleteRestaurant/{restaurantId}:
 *   delete:
 *    summary: Elimina un restaurante por su ID
 *    tags: [Restaurantes]
 *    parameters:
 *      - name: restaurantId
 *        in: path
 *        required: true
 *        description: ID del restaurante a eliminar
 * 
 *    responses:
 *     200:
 *      description: Restaurante eliminado
 *     400:
 *      description: Error al eliminar el restaurante
 *     500:
 *      description: Error interno del servidor
 */
router.delete('/deleteRestaurant/:restaurantId', RestaurantController.deleteRestaurant); //Especificar delete en postman

// Ruta para actualizar un restaurante por su ID
/**
 * @swagger
 * /updateRestaurant/{restaurantId}:
 *   put:
 *    summary: Actualiza un restaurante por su ID
 *    tags: [Restaurantes]
 *    parameters:
 *      - name: restaurantId
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
 *          link:
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
 *    500:
 *     description: Error interno del servidor
 */
router.put('/updateRestaurant/:restaurantId', RestaurantController.updateRestaurant); //Especificar put en postman

// Ruta para obtener un Restaurante por su ID
/**
 * @swagger
 * /findByIdRestaurant/{restaurantId}:
 *   get:
 *    summary: Obtiene un restaurante por su ID
 *    tags: [Restaurantes]
 *    parameters:
 *      - name: restaurantId
 *        in: path
 *        required: true
 *        description: ID del restaurante a obtener
 *
 *   responses:
 *    200:
 *     description: Restaurante encontrado
 *    400:
 *     description: Error al obtener el restaurante
 *    500:
 *     description: Error interno del servidor
 */
router.get('/findByIdRestaurant/:restaurantId', RestaurantController.findByIdRestaurant)

// Ruta para obtener todos los restaurantes
/**
 * @swagger
 * /getAllRestaurant:
 *  get:
 *   summary: Obtiene todos los restaurantes
 *   tags: [Restaurantes]
 *   responses:
 *    200:
 *     description: Lista de restaurantes
 *    400:
 *     description: Error al obtener los restaurantes
 *    500:
 *     description: Error interno del servidor
 */
router.get('/findAllRestaurant', RestaurantController.findAll);

 
module.exports = router;