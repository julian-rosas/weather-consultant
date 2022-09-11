/**
 * Controlador.
 * Se encarga de administrar 
 * las peticiones del enrutador.
 * Conecta el modelo con la vista.
 * @module controllers/index
 */

/**
 * Modelo.
 */
const Gestor = require('../model/src/js/Gestor');
const gestor = new Gestor();

/**
 * Función index, reponde 
 * a la petición de la ruta
 * "/", regresando la vista 
 * principal.
 * @param req no se toma en cuenta.
 * @param res la respuesta del servidor. 
 * @param next no se toma en cuenta.
 */
const index = (req, res, next) => {
    res.render('index', {
        title: 'Aeropuerto CDMX',
        mensage: ''
    });
};

/**
 * Función getWeather, responde
 * a la petición "/getweather" conectando
 * el modelo con la vista, y enviando la
 * información solicitada por el cliente.
 * @param {string} req información enviada 
 * por el cliente.
 * @param  res respuesta del servidor.
 * @param next no se toma en cuenta. 
 */
const getWeather = async (req, res, next) => {
    let iataOrigin = req.body.iataCodeOrigen;
    let iataDestiny = req.body.iataCodeDestiny;
    console.log("post - " + iataOrigin);
    console.log("post - " + iataDestiny);
    let data = await gestor.manage(iataOrigin, iataDestiny);
    console.log("Petición api: " + data);
    if (data[0] === '') {
        res.render('index', {
            title: 'Aeropuerto CDMX',
            mensage: "Código iata de origen o destino no válido."
        });
        return;
    }

    res.render('clima', {
        title: 'Clima',
        nameOrigin: iataOrigin,
        nameDestiny: iataDestiny,
        vuelo: `${iataOrigin}-${iataDestiny}`,
        tempOrigin: `${data[0]}°C`,
        tempDestiny: `${data[1]}°C`
    });
};

module.exports = {
    index,
    getWeather
}