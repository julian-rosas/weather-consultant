class Ticket{

    /**
     * Constructor de un ticket, el cual contiene el codigo iata de la ciudad de 
     * origen y destino, y la longitud y latitud de la ciudad de origen y destino.
     * @param {string} iata_origin - Codigo iata de la ciudad de origen.
     * @param {string} iata_destiny - Codigo iata de la ciudad de destino.
     * @param {Array<string>} coordinates_origin - Longitud y latitud de la ciudad de origen.
     * @param {Array<string>} coordinates_destiny - Longitud y latitud de la ciudad de destino.
     */
    constructor(iata_origin, iata_destiny, coordinates_origin, coordinates_destiny){
        this.iata_origin = iata_origin;
        this.iata_destiny = iata_destiny;

        this.coordinates_origin = coordinates_origin;
        this.coordinates_destiny = coordinates_destiny;
    }


    getIataOrigin(){
        return this.iata_origin;
    }


    getIataDestiny(){
        return this.iata_destiny;
    }

    getCoordinatesOrigin(){
        return this.coordinates_origin;
    }

    getCoordinatesDestiny(){
        return this.coordinates_destiny;
    }


} 


module.exports = Ticket;
