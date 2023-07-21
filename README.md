# Guía para ejecutar proyecto de Node en mi ambiente local

## Requerimientos previos
### Versión 
Para poder ejecutar correctamente el proyecto es necesario contar con la versión **17.9.1** de Node. A continuación están los pasos a seguir en caso de no tenerla instalada: 

1. Instalamos la versión
   ```javascript
   nvm install 17.9.1
   ```
   >Nota: Si no instalamos ninguna otra versión de Node previamente, **la versión 17.9.1 se establecerá como versión por defecto**. Sin embargo, si ya instalamos alguna otra versión, la versión 17.9.1 se usará **sólo durante nuestra sesión actual**.
2. Cambiamos a la versión instalada
   ```javascript
   nvm use 17.9.1
   ```
   >*En caso de querer que esta versión sea nuestra versión por defecto, debemos ejecutar el siguiente comando:*
   ```javascript
   nvm alias default 17.9.1
   ```

## Instalación y ejecución
Una vez cumplidos los requerimientos previos, podemos pasar a la instalación y la ejecución del proyecto.

1. Clonamos el repositorio
   ```bash
   git clone https://github.com/ucu-challenge-2023/gdr_back-end.git
   ```
3. Nos ubicamos en el directorio raiz del proyecto e instalamos las dependencias del mismo
   ```javascript
   npm install
   ```
2. Abrimos el directorio raiz del proyecto en nuestro editor
   >"code ." en caso de Visual Studio Code
4. Para corroborar que todo funciona correctamente, ejecutamos el **```index.js```**, que a modo de ejemplo simula la iteracción con la base de datos. Para hacerlo, hace falta posicionarnos en el directorio raiz y escribir el siguiente comando:
   ```javascript
   node src/index.js
   ```
   Si no hay ningún problema, se mostrará en consola el siguiente mensaje:
   
   ```bash
   Server listing on port 3000
   Error al conectar con la base de datos
   ```

## Dependencias

El proyecto utiliza diversas dependencias para **proporcionar funcionalidades adicionales y optimizar el desarrollo**. Estas dependencias son paquetes de software externos que se han integrado en el proyecto para facilitar tareas específicas.

**Las mismas son**:
- 
- **Express:** *Framework web rápido y minimalista para Node.js que permite crear aplicaciones web y APIs de manera sencilla.*
- **Morgan:**  *Middleware de registro de solicitudes HTTP para Express. Proporciona registros detallados de las solicitudes recibidas por el servidor.*
 - **pg:**  *Paquete de Node para interactuar con bases de datos PostgreSQL.*
 - **Sequelize:**  *Proporciona una abstracción sobre la base de datos, permitiendo interactuar con la misma utilizando objetos y métodos en lugar de consultas SQL directas.*
