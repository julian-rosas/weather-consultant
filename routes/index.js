/**
 * Enrutador.
 * Redirecciona o entrega
 * información, dependiendo 
 * de la ruta que el cliente
 * solicite al servidor.
 * @module routes/index
 */

/**
 * Módulo express, 
 * para obtener un enrutador.
 */
const express = require('express');
/**
 * Define el enrutador.
 */
const router = express.Router();
/**
 * El controlador que maneja
 * las rutas.
 */
const indexController = require('../controllers/index');

/**
 * Administra una serie de peticiones
 * del clinete para que el controlador
 * se encargue de ellas.
 */
router.get("/", indexController.index);
router.post("/getweather", indexController.getWeather);

module.exports = router;