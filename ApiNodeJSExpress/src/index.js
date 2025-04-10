//Imports
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Configuraciones

// 🔹 Configuración de Swagger
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de Shows & Resto",
        version: "1.0.1",
        description: "Documentación de la Rest-API",
      },
      servers: [
        {
          url: "https://show-and-restoback-production.up.railway.app", // Cambia según tu entorno
        },
      ],
    },
    apis: ["src/routes/*.js"], // Ruta de los archivos donde están las rutas
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Configuracion de Puertos y JSON
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

 
//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 
 
 
//Routes
app.use(require('./routes/restauranteRoutes.js'));
app.use(require('./routes/showRoutes.js')); 
app.use(require('./routes/tipoComidaRoutes.js'));

//Iniciando el servidor
app.listen(app.get('port'),()=>{
    
    console.log(`Server listening on port ${app.get('port')}`);
});