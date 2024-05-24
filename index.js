// index.js

const axios = require('axios');

// Función para consultar los datos de usuarios
async function consultarUsuarios() {
  try {
    const response = await axios.get('http://localhost:3000/peliculas');
    const usuarios = response.data;
    console.log('Datos de usuarios:', usuarios);
    // Aquí puedes hacer lo que quieras con los datos, como renderizarlos en tu página web
  } catch (error) {
    console.error('Error al obtener datos de usuarios:', error);
  }
}

// Llamar a la función para consultar usuarios
consultarUsuarios();