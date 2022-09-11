
/**
 * Clase que representa la información del Ticket de un vuelo con 
 * ciudad de origen y de destino.
 */
class Ticket{

    /**
     * Constructor de un ticket, el cual contiene el codigo iata de la ciudad de 
     * origen y destino, y la longitud y latitud de la ciudad de origen y destino.
     * @param {string} iata_origin - Codigo iata de la ciudad de origen.
     * @param {string} iata_destiny - Codigo iata de la ciudad de destino.
     * @param {Array<string>} coordinates_origin - Latitud y longitud de la ciudad de origen, 
     *                                             con entrada [latitudCiudadOrigen, longitudCiudadOrigen].
     * 
     * @param {Array<string>} coordinates_destiny - Latitud y longitud de la ciudad de destino,
     *                                              con entrada [latitudCiudadDestino, longitudCiudadDestino].
     */
    constructor(iata_origin, iata_destiny, coordinates_origin, coordinates_destiny){
        this.iata_origin = iata_origin;
        this.iata_destiny = iata_destiny;

        this.coordinates_origin = coordinates_origin;
        this.coordinates_destiny = coordinates_destiny;
    }

    /**
     * Getter del código IATA de la ciudad de origen.
     * @returns {string} - código IATA de la ciudad de origen.
     */
    getIataOrigin(){
        return this.iata_origin;
    }

    /**
     * Getter del código IATA de la ciudad de destino.
     * @returns {string} - código IATA de la ciudad de destino.
     */
    getIataDestiny(){
        return this.iata_destiny;
    }


    /**
     * Getter de las coordenadas (latitud y longitud) de la ciudad de origen.
     * @returns {Array<string>} - [latitudCiudadOrigen, longitudCiudadOrigen].
     */
    getCoordinatesOrigin(){
        return this.coordinates_origin;
    }



    /**
    * Getter de las coordenadas (latitud y longitud) de la ciudad de destino.
    * @returns {Array<string>} - [latitudCiudadDestino, longitudCiudadDestino].
    */
    getCoordinatesDestiny(){
        return this.coordinates_destiny;
    }


} 


module.exports = Ticket;
