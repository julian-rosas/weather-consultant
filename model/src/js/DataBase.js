const Read = require('../js/Read');
const Ticket = require('../js/Ticket');

/**
 * Clase que representa la base de datos de los vuelos disponibles (leídos del .csv).
 */
class DataBase{

    /* Diccionario que almacena los vuelos válidos del .csv, teniendo como entrada
    *  {'CodigoIataOrigen_CodigoIataDestino' : Ticket}.
    */
    #db = {};

    /**
     * Constructor que genera el diccionario de la base de datos.
     */
    constructor(){
        this.#generateDictionary();
    }

    /**
     * Método privado que genera el diccionario de tickets disponibles para así
     * acceder a ellos en O(1), invocado por el constructor. 
     */
    #generateDictionary(){
        
        let read = new Read();
        
        // arreglo bidimensional que almacena la información del .csv
        let csvArray = read.readFile("./model/src/files/dataset1.csv");

        // se itera el arreglo bidimensional y se forma una llave y un ticket por renglón.
        for(let row = 0; row < csvArray.length; row++){
            let record = csvArray[row];
            let iataOrigin = record[0];
            let iataDestiny = record[1];

            // [latitudOrigen, longitudOrigen]
            let coordOrigin = [record[2], record[3]];

            // [latitudDestino, longitudDestino]
            let coordDestiny = [record[4], record[5]];

            // formato de la llave del diccionario de la base de datos.
            let key = iataOrigin + "_" + iataDestiny;

            // ticket formado con los valores leidos del .csv, sirviendo como
            // valor de la llave del diccionario de la base de datos.
            const ticket = new Ticket(iataOrigin,iataDestiny,coordOrigin,coordDestiny);
            
            // se agrega la entrada a la base de datos.
            this.#db[key] = ticket;
        }
    }

    /**
     * Método privado que regresa true en caso de que el vuelo sea válido 
     * (con el formato establecido como llave de la base de datos) o false en caso
     * contrario. 
     */
    #validTrip(iataTrip){
        return this.#db[iataTrip] != null;
    }

    /**
     * Método que se hace cargo de hacer una consulta sobre el ticket de 
     * dado por el usuario.
     * @param {string} iataTrip - Código IATA del vuelo (con el formato de la llave de la base de datos).
     * @return {Ticket} - Ticket del vuelo en caso de que sea válido, null en caso contrario. 
     */
    query(iataTrip){
        if(this.#validTrip(iataTrip)){
            return this.#db[iataTrip];
        }else{
            return null;
        }
    }    

}

module.exports = DataBase;