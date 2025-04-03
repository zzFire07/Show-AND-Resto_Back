const { Router } = require('express');
const router = Router();

const ShowController = require('../controllers/showController');

/**
 * @swagger
 * tags:
 *  name: Shows
 *  description: API para gestionar shows
 * 
*/

// Ruta para crear un show
/**
 * @swagger
 * /createShow:
 *   post:
 *     summary: Crea un nuevo show
 *     tags: [Shows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               weblink:
 *                 type: string
 *               image:
 *                 type: string
 *               id_departamento:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Show creado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error interno del servidor
 *       404:
 *         description: Departamento no encontrado
 *       409:
 *         description: Show ya existe
 */
router.post('/createShow', ShowController.createShow);

// Ruta para eliminar un show
/**
 * @swagger
 * /deleteShow/{showId}:
 *   delete:
 *     summary: Elimina un show por su ID
 *     tags: [Shows]
 *     parameters:
 *       - name: showId
 *         in: path
 *         required: true
 *         description: ID del show a eliminar
 *         type: integer
 *     responses:
 *       200:
 *         description: Show eliminado exitosamente
 *       404:
 *         description: Show no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/deleteShow/:showId', ShowController.deleteShow);

// Ruta para actualizar un show
/**
 * @swagger
 * /updateShow/{showId}:
 *   put:
 *     summary: Actualiza un show por su ID
 *     tags: [Shows]
 *     parameters:
 *       - name: showId
 *         in: path
 *         required: true
 *         description: ID del show a actualizar
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               weblink:
 *                 type: string
 *               image:
 *                 type: string
 *               id_departamento:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Show actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Show no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/updateShow/:showId', ShowController.updateShow);

// Ruta para obtener un show por su ID
/**
* @swagger
* /findByIdShow/{showId}:
*   get:
*     summary: Obtiene un show por su ID
*     tags: [Shows]
*     parameters:
*       - name: showId
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
router.get('/findByIdShow/:showId', ShowController.findByIdShow);

// Ruta para mostrar todos los shows
/**
 * @swagger
 * /findAllShow:
 *  get:
 *    summary: Obtiene todos los shows
 *    tags: [Shows]
 *    responses:
 *      200:
 *        description: Lista de shows
 *      404:
 *        description: No se encontraron shows
 *      500:
 *        description: Error interno del servidor
 * 
 */
router.get('/findAllShow', ShowController.findAllShow);

module.exports = router;