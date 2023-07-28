const { Router } = require('express');
const router = Router();


const RestaurantController = require('../controllers/restaurantController');

// Ruta para obtener un usuario por su ID
router.post('/createRestaurant', RestaurantController.createRestaurant); //Especificar post en postman
router.delete('/deleteRestaurant/:restaurantId', RestaurantController.deleteRestaurant); //Especificar delete en postman
router.put('/updateRestaurant/:restaurantId', RestaurantController.updateRestaurant); //Especificar put en postman
router.get('/findAllRestaurant', RestaurantController.findAll);
router.get('/findByIdRestaurant/:restaurantId', RestaurantController.findByIdRestaurant)

 
module.exports = router;