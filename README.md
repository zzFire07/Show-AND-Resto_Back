# Guía para ejecutar proyecto de Node en mi ambiente local

## Requerimientos previos
### Versión de Node (17.9.1)
[![Node.js][Node.js]][Node-url]

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
### Descargar  PostgreSQL (v15.3)
[![PostgreSQL][PostgreSQL.com]][Postgres-url]

La base de datos que utilizaremos en el proyecto es **PostgreSQL** y es fundamental una correcta instalación de la misma para evitar conflictos a la hora de ejecutar el proyecto. Los pasos son los siguientes:

1. Ingresamos a **``https://www.enterprisedb.com/downloads/postgres-postgresql-downloads``**,  y descargamos la versión **15.3**.


2. Ejecutamos el instalador con permisos de administrador.

3. Seguimos los pasos dejando todo por defecto. En cuanto a la **contraseña**, podemos usar la misma que se usa en el proyecto para no tener que cambiarla en el archivo de forma manual. La misma es **``admin``**. 
   >En caso de tener contraseña propia, se explicarán más adelante los pasos a seguir

Una vez finalizada la instalación, se abrirá una ventana sugireindo abrir el Stack Builder, la cerramos.

#### *¿QUE HACER EN CASO DE ERROR?*
Es posible que en medio del proceso de instalación nos salte un error, de ser así, tendremos que llevar a cabo una serie de medidas para solucionarlo:
1. Desinstalamos Postgres.
2. Deshabilitamos el Firewall de Windows/macOS y el antivurus en caso de tener uno.
3. Volvemos a realizar la descarga.

### Descargar pgAdmin (v7.4)
pgAdmin es un software complementario de PostgreSQL, nos sirve para administrar las bases de datos mediante una interfaz gráfica. Para descargarlo hacemos lo siguiente:

1. Ingresamos a **``https://www.pgadmin.org/download/``**, seleccionamos nuestro sistema operativo y descargamos la versión **7.4**.
2. Ejecutamos el instalador con permisos de administrador y seguimos los pasos.


### Descargar Postman (v10.16.1) 
[![Postman][Postman.com]][Postman-url]

Lo último que vamos a descargar es Postman, una herramienta de desarrollo que nos permite probar y trabajar con APIs de manera eficiente. La instalamos ingresando a **``https://www.postman.com/downloads/``** y descargando la versión 10.16.1 (Es la última versión por lo cual le damos solo a descargar)



## Instalación y ejecución
Una vez cumplidos los requerimientos previos, podemos pasar a la instalación y la ejecución del proyecto.


1. Clonamos el repositorio
   ```bash
   git clone https://github.com/ucu-challenge-2023/gdr_back-end.git
   ```
2. Verificamos estar usando la version 17.9.1 de Node
   ```bash
   node --version
   ```
3. Nos ubicamos en el directorio raiz del proyecto e instalamos las dependencias del mismo
   ```javascript
   npm install
   ```
4. Abrimos el directorio raiz del proyecto en nuestro editor
   >"code ." en caso de Visual Studio Code


5. Para corroborar que todo funciona correctamente, ejecutamos el **```index.js```**, que a modo de ejemplo simula la iteracción con la base de datos. Para hacerlo, hace falta posicionarnos en el directorio raiz y escribir el siguiente comando:
   ```javascript
   node src/index.js
   ```
   Si no hay ningún problema, se mostrará en consola el siguiente mensaje:
   
   ```bash
   Server listing on port 3000
   Conexión a la base de datos establecida correctamente.
   ```
   > IMPORTANTE: En caso de haber creado una contraseña diferente a **``admin``** a la hora de instalar Postgres, nos                 dirigimos a ``src/config/database.js``, y en la linea 5 ``const sequelize = new Sequelize('postgres', 'postgres', 'admin'`` cambiamos 'admin' por nuestra contraseña. Finalmente guardamos y volvemos a ejecutar **``node src/index.js``**.

## Dependencias

El proyecto utiliza diversas dependencias para **proporcionar funcionalidades adicionales y optimizar el desarrollo**. Estas dependencias son paquetes de software externos que se han integrado en el proyecto para facilitar tareas específicas.

### **Las mismas son**:

- **Express:** *Framework web rápido y minimalista para Node.js que permite crear aplicaciones web y APIs de manera sencilla.*
- **Morgan:**  *Middleware de registro de solicitudes HTTP para Express. Proporciona registros detallados de las solicitudes recibidas por el servidor.*
 - **pg:**  *Paquete de Node para interactuar con bases de datos PostgreSQL.*
 - **Sequelize:**  *Proporciona una abstracción sobre la base de datos, permitiendo interactuar con la misma utilizando objetos y métodos en lugar de consultas SQL directas.*


[Node.js]: https://img.shields.io/badge/Node.js-2fba2f?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/blog/release/v17.9.1
[PostgreSQL.com]:https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Sequelize.js]: https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue
[Sequelize-url]: https://sequelize.org/
[Postman.com]: https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white
[Postman-url]: https://www.postman.com/downloads/
