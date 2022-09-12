
/**
 * Clase que representa el caché de climas ya consultados en la API.
 */
class Cache{

    /* Diccionario cuya entrada es {codigoIataCiudad : climaCiudad} y 
    *  permite en tiempo O(1) acceder a climas de ciudades ya calculadas.
    */
    #cache = {};

    /**
     * Constructor vacío.
     */
    constructor(){}

    /**
     * Método que dado el código IATA de una ciudad y su clima, los agrega al 
     * caché.
     * @param {string} iataCity - Código IATA de la ciudad.
     * @param {string} weather - Clima de la ciudad.
     */
    addWeather(iataCity, weather){
        this.#cache[iataCity] = weather;
    }

    /**
     * Método que regresa 'true' en caso de que la ciudad esté en el caché, 'false' 
     * en caso contrario.
     * @param {string} iataCity - Código IATA de la ciudad. 
     * @returns {boolean} 'true' en caso de que la ciudad esté en el caché, 'false' 
     *          en caso contrario.
     */
    isInCache(iataCity){
        return this.#cache[iataCity] != null;
    }

    /**
     * Método que regresa el clima de la ciudad en caso de que se encuentre en 
     * el caché.
     * @param {string} iataCity - Código IATA de la ciudad.
     * @returns {string} Clima de la ciudad.
     */
    getWeather(iataCity){
        if(this.isInCache(iataCity)){
            return this.#cache[iataCity];
        }
    }

}


module.exports = Cache;