const fetch = require('node-fetch');

/**
 * Clase que se encarga de realizar las consultas del clima a la 
 * API OpenWeather.
 */
class Request{

    /**
     * Constructor vacío.
     */
    constructor(){}


    /**
     * Método que dada la longitud y latitud de una ciudad y una llave de la API,
     * realiza la consulta del Clima, devolviendo un .json con la información del
     * clima de la ciudad.
     * 
     * @param {string} latitude - latitud de la ciudad.
     * @param {string} longitude - longitud de la ciudad.
     * @param {string} key - llave válida de la API para poder hacer consultas.
     * @returns .json con la información de la consulta a la API.
     */
    async getWeather(latitude, longitude, key){
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5a1b08c966f8f65b94268d9a7e5f714d&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    }
}


module.exports = Request;