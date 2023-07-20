const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Ruta para obtener un usuario por su ID
router.get('/users/:userId', UserController.getUserById);

module.exports = router;
