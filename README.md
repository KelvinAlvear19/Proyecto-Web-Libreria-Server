<h1 align="center">Node</h1>

<p align="center">
  <img src="https://e0.pxfuel.com/wallpapers/394/637/desktop-wallpaper-node-js-hello-world-webpage.jpg" alt="angular-logo" width="300px" height="120px"/>
  <br>
  <em>Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome que permite ejecutar código JavaScript del lado del servidor.
    <br> </em>
  <br>
</p>


 
## Instalación
Asegúrate de tener instalados los siguientes requisitos en tu sistema:
<br>
<img alt="Static Badge" src="https://img.shields.io/badge/node-version%20v16.15.0%20-green">

Por favor, consulte la guía oficial de instalación de Node para los requisitos del servidor antes de empezar.

Clonar el repositorio

      https://github.com/KelvinAlvear19/Proyecto-Web-Libreria-Angular.git](https://github.com/KelvinAlvear19/Proyecto-Web-Libreria-Server.git

Instalar Dependencias

    npm install


Ejecuta el proyecto con el comando

    npm start
##Informacion API

La API proporciona funcionalidades relacionadas con libros, catalogando información y permitiendo la gestión de reseñas.

  - GET /libros: Recupera todos los libros.
  - POST /libros: Crea un nuevo libro.
  - GET /libros/:id: Recupera un libro por ID.
  - PUT /libros/:id: Actualiza un libro por ID.
  - DELETE /libros/:id: Elimina un libro por ID.

Catálogos:

La API admite la creación y administración de catálogos para organizar los libros y simplificar la búsqueda.

- GET /catalogos: Recupera todos los catálogos.
- POST /catalogos: Crea un nuevo catálogo.
- GET /catalogos/:id: Recupera un catálogo por ID.
- PUT /catalogos/:id: Actualiza un catálogo por ID.
- DELETE /catalogos/:id: Elimina un catálogo por ID.
Reseñas:

Permite a los usuarios agregar y gestionar reseñas para compartir opiniones sobre los libros.

- GET /resenas: Recupera todas las reseñas.
- POST /resenas: Crea una nueva reseña.
- GET /resenas/:id: Recupera una reseña por ID.
- PUT /resenas/:id: Actualiza una reseña por ID.
- DELETE /resenas/:id: Elimina una reseña por ID.

Características:

La API proporciona información detallada sobre las características de los libros, como género, autor, año de publicación, etc.

- GET /caracteristicas: Recupera todas las características.
- POST /caracteristicas: Agrega una nueva característica.
- GET /caracteristicas/:id: Recupera una característica por ID.
- PUT /caracteristicas/:id: Actualiza una característica por ID.
- DELETE /caracteristicas/:id: Elimina una característica por ID.
