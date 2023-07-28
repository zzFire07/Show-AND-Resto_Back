const { Router } = require('express');
const router = Router();


const FoodTypeController = require('../controllers/foodTypeController');

// Ruta para obtener un usuario por su ID
router.post('/createFoodType', FoodTypeController.createFoodType); //Especificar post en postman
router.delete('/deleteFoodType/:foodTypeId', FoodTypeController.deleteFoodType); //Especificar delete en postman
router.put('/updateFoodType/:foodTypeId', FoodTypeController.updateFoodType); //Especificar put en postman
router.get('/findAllFoodType', FoodTypeController.findAll);
router.get('/findByIdFoodType/:foodTypeId', FoodTypeController.findByIdFoodType)

 
module.exports = router;