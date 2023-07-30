const { Router } = require('express');
const router = Router();


const DrinkTypeController = require('../controllers/drinkTypeController');

// Ruta para obtener un show por su ID
router.get('/drinkTypes/findByIdDrinkType/:drinkTypeId', DrinkTypeController.findByIdDrinkType);

// Ruta para mostrar todos los shows
router.get('/drinkTypes/findAllDrinkType', DrinkTypeController.findAllDrinkType);

// Ruta para crear un show
router.post('/drinkTypes/createDrinkType', DrinkTypeController.createDrinkType);

// Ruta para eliminar un show
router.delete('/drinkTypes/deleteDrinkType/:drinkTypeId', DrinkTypeController.deleteDrinkType);

// Ruta para actualizar un show
router.put('/drinkTypes/updateDrinkType/:drinkTypeId', DrinkTypeController.updateDrinkType);



module.exports = router;