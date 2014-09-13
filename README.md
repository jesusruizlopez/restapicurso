#API - FacebookApp

RESTful API construida en NodeJS para proveer los servicios básicos para la aplicación FacebookApp del curso práctico iOS

###Requisitos
- NodeJS
- MongoDB

###Instalación
Ejecutar desde la terminal el comando: **npm install** dentro del directorio principal del proyecto para instalar las dependencias

###Ejecución
Iniciar el servidor de bases de datos MongoDB (desde la terminal: mongod) y el servidor web NodeJS ejecutando desde la terminal: **node server.js**

##Documentación API
####USUARIOS
**[GET]** /getUsers

- **Response:** {success: Boolean, users: Array}

**[POST]** /register

- **Request:** {username: String}
- **Response:** {success: Boolean, message: String, user: Object}

####PUBLICACIONES
**[GET]** /getPublications

- **Response:** {success: Boolean, publications: Array}

**[POST]** /sendPublication

- **Request:** {user: String, message: String}
- **Response:** {success: Boolean, message: String, publication: Object}

**[PUT]** /editPublication/{id}

- **Request:** {message: String}
- **Response:** {success: Boolean, message: String, publication: Object}
