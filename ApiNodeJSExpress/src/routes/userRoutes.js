const { Router } = require('express');
const router = Router();

 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas!!!!!" 
        }
    );
})


const UserController = require('../controllers/userController');

// Ruta para obtener un usuario por su ID
router.get('/users/findByIdUser/:userId', UserController.findByIdUser);

// Ruta para mostrar todos los usuarios
router.get('/users/findAllUser', UserController.findAllUser);

// Ruta para eliminar un usuario
router.delete('/users/deleteUser/:userId', UserController.deleteUser);

// Ruta para actualizar un usuario
router.put('/users/updateUser/:userId', UserController.updateUser);


module.exports = router;