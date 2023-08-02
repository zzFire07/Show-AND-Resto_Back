const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 

//Routes
app.use(require('./routes/restaurantRoutes.js')); 
app.use(require('./routes/userRoutes.js')); 
app.use(require('./routes/showRoutes.js')); 
app.use(require('./routes/foodTypeRoutes.js')); 
app.use(require('./routes/drinkTypeRoutes.js'));

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    
    console.log(`Server listening on port ${app.get('port')}`);
});