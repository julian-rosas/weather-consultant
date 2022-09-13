const fetch = require('node-fetch');

/**
 * Clase que se encarga de realizar las consultas del clima a la 
 * API OpenWeather.
 */
class Request{


    /* Llave de la API OpenWeather */
    #apiKey;

    /**
     * Constructor que declara la llave de la API para hacer requests.
     */
    constructor(apiKey){
        this.#apiKey = apiKey;
        this.#isValidKey();
    }

    /**
     * Método privado que comprueba que una llave de la API OpenWeather sea válida.
     */
    async #isValidKey(){
        try {
            
            // url de prueba que retorna el clima de London si la llave de la API
            // es válida.
            const url = `https://api.openweathermap.org/data/2.5/weather?q=London,&appid=${this.#apiKey}&units=metric`;
            const response = await fetch(url);
            
            // si el status es distino de 200, la llave es inválida.
            if(response.status != 200){
                console.log("Llave API inválida");
                process.exit();
            }

        } catch (error) {
            console.log(error);
            process.exit();
        }
    }


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
    async getWeather(latitude, longitude){
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.#apiKey}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    }
}


module.exports = Request;