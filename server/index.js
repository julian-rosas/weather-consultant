/**
 * El servidor.
 * @module server/index
 */

/**
 * Módulo para rutas. 
 */
const path = require('path');
/**
 * Módulo express para construir
 * un servidor.
 */
const express = require('express');

/**
 * Define el servidor.
 */
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes/index.js');

/**
 * Configuraciones del 
 * servidor.
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.set('port', process.env.PORT || 3000);

/**
 * Escuchas. 
 */
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * Uso del enrutador.
 */
app.use(routes);

/**
 * Define la localización
 * de los archivos estáticos.
 */
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;