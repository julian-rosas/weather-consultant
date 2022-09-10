const Read = require('../js/Read');
const Ticket = require('../js/Ticket');
const Cache = require('../js/Cache');

class DataBase{
    #dict = {};
    constructor(){
        this.#generateDictionary();
    }

    /**
     * Metodo privado que genera el diccionario (de tickets disponibles) para asi
     * acceder a ellos en O(1), invocado por el construtor. 
     */
    #generateDictionary(){
        
        let read = new Read();
        let arr = read.readFile("./model/src/files/dataset1.csv");

        for(let i = 0; i < arr.length; i++){
            let line = arr[i];
            let iataOr = line[0];
            let iataDes = line[1];
            let coordOr = [line[2], line[3]];
            let coordDes = [line[4], line[5]];

            let key = iataOr + "_" + iataDes;

            const ticket = new Ticket(iataOr,iataDes,coordOr,coordDes);
            
            this.#dict[key] = ticket;
        }
    }


    toString(){
        console.log(this.#dict);
    }


    #validTrip(iataViaje){
        return this.#dict[iataViaje] != null;
    }

    /**
     * Metodo que va a hacerse en cargo de hacer una consulta sobre el ticket de 
     * pasado por el usuario, si no es valido, entonces se muestra el error.
     * @param {string} iataViaje 
     */
    consulta(iataViaje){
        if(this.#validTrip(iataViaje)){
            return this.#dict[iataViaje];
        }else{
            return null;
        }
        /*
        if(this.#validTrip(iataViaje)){

            let cache = new Cache();
            let ticket = this.#dict[iataViaje];

            let weatherOrigin = cache.findWeather(ticket.getIataOrigin());
            let weatherDestiny = cache.findWeather(ticket.getIataDestiny());

            console.log(ticket.getIataOrigin() + " " + weatherOrigin);
            console.log(ticket.getIataDestiny() + " " + weatherDestiny);

            //console.log(ticket.getIataOrigin());
            //console.log(ticket.getIataDestiny());


        }else{
            console.error("Vuelo inexistente");
        }
        */

    }    

}

module.exports = DataBase;