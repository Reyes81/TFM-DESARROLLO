const path = require('path');

module.exports = {
  entry: './src/main.js', // Archivo de entrada principal de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos compilados
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  resolve: {
    fallback: {
      path: false
    }
  },
  module: {
    rules: [
      // Reglas de carga de módulos adicionales
      // Por ejemplo, reglas para cargar archivos JavaScript, CSS, etc.
      // Aquí puedes configurar loaders según tus necesidades
    ],
  },
};







