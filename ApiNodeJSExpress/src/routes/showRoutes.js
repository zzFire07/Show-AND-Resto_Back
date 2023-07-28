const { Router } = require('express');
const router = Router();


const ShowController = require('../controllers/showController');

// Ruta para obtener un show por su ID
router.get('/shows/findByIdShow/:showId', ShowController.findByIdShow);

// Ruta para mostrar todos los shows
router.get('/shows/findAllShow', ShowController.findAllShow);

// Ruta para crear un show
router.post('/shows/createShow', ShowController.createShow);

// Ruta para eliminar un show
router.delete('/shows/deleteShow/:showId', ShowController.deleteShow);

// Ruta para actualizar un show
router.put('/shows/updateShow/:showId', ShowController.updateShow);



module.exports = router;