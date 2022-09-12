const Cache = require('./Cache');
const DataBase = require('./DataBase');
const Request = require('./Request');

/**
 * Clase que se encarga de orquestrar el caché, la base de datos
 * y las consultas a la API.
 */
class Manager{

    /* Base de datos del proyecto, donde se almacenan los vuelos validos. */
    #db;

    /* Caché del proyecto, donde se almacenan las consultas a la API ya calculadas.*/
    #cache;

    /* Instancia de Request, que se encarga de realizar las consultas de climas a la API. */
    #request;

    /**
     * Constructor que crea la base de datos y el caché. 
     */
    constructor(){
        this.#db = new DataBase();
        this.#cache = new Cache();
        this.#request = new Request();
    }


    /**
     * Método privado que, dada las coordenadas de una ciudad (longitud y latirud), 
     * realiza la consulta a la API OpenWeather (por medio de la instancia Request) la cual devuelve 
     * el clima de la ciudad correspondiente.
     */
    async #getRequest(coordinatesCity){
        const json = await this.#request.getWeather(coordinatesCity[0], coordinatesCity[1], null);
        console.log("Clima: " + json.main.temp);
        return json.main.temp;
    }

    /**
     * Método que se encarga de determinar si el vuelo dado es válido en la base de datos 
     * y de consultar el caché en caso de que el clima ya se haya calculado, 
     * en caso contrario, realizar las consultas a la API.
     * @param {string} iataOrigin - Código IATA de la ciudad de origen.
     * @param {string} iataDestiny - Código IATA de la ciudad de destino.
     * @returns {Array<string>} - ['',''] si el vuelo es inválido, o bien [ClimaCiudadOrigen, ClimaCiudadDestino]
     *                            en caso contrario.
     */
    async manage(iataOrigin, iataDestiny){
        // se realiza el formato de la llave de la base de datos.
        let keyDB = iataOrigin + "_" + iataDestiny;
        
        let weather = ['',''];
        let ticket = this.#db.query(keyDB);

        // si el vuelo es válido.
        if(ticket != null){

            // se corrobora si el clima de la ciudad de origen
            // ya fue consultado antes.
            if(this.#cache.isInCache(iataOrigin)){
                console.log("Cache working");
                weather[0] = this.#cache.getWeather(iataOrigin);
            }else{

                // se realiza la consulta a la API por medio de las coordenadas
                // de longitud y latitud de la ciudad de origen.
                weather[0] = await this.#getRequest(ticket.getCoordinatesOrigin());
                this.#cache.addWeather(iataOrigin, weather[0]);
            }

            // se corrobora si el clima de la ciudad de destino
            // ya fue consultado antes.
            if(this.#cache.isInCache(iataDestiny)){
                console.log("Cache working");
                weather[1] = this.#cache.getWeather(iataDestiny);
            }else{
                
                // se realiza la consulta a la API por medio de las coordenadas
                // de longitud y latitud de la ciudad de destino.
                weather[1] = await this.#getRequest(ticket.getCoordinatesDestiny());
                this.#cache.addWeather(iataDestiny,weather[1]);
            }
            
        }

        return weather;
    }        
}

module.exports = Manager;