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
router.get('/users/findAllUser', UserController.findAllUser);



module.exports = router;