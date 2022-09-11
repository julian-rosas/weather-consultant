/**
 * Archivo principal del programa.
 * Ejecuta e inicializa el programa completo.
 * @module app
 */

/**
 * Servidor.
 */
const app = require('./server/index');

/**
 * Arranque del servidor. 
 * */ 
app.listen(3000, () => console.log('server on port 3000'));