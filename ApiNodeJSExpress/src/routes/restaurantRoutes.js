const { Router } = require('express');
const router = Router();


const RestaurantController = require('../controllers/restaurantController');

// Ruta para obtener un usuario por su ID
router.get('/restaurant/findAll', RestaurantController.findAll);
router.post('/createRestaurant', RestaurantController.createRestaurant);
router.delete('/deleteRestaurant/:restaurantId', RestaurantController.deleteRestaurant);
router.put('/updateRestaurant', RestaurantController.updateRestaurant);
//router.get('/usuarios/:userName', UserController.searchByUser);

 
module.exports = router;