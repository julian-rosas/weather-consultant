const Cache = require('../js/Cache');
const DataBase = require('../js/DataBase');
const Request = require('../js/Request');


class Gestor{

    #db;
    #cache;
    #request;

    constructor(){
        this.#db = new DataBase();
        this.#cache = new Cache();
        this.#request = new Request();
    }


    async #getRequest(coordinatesCity){
        const json = await this.#request.getWeather(coordinatesCity[0], coordinatesCity[1], null);
        console.log("Clima: " + json.main.temp);
        return json.main.temp;
    }


    async manage(iataOrigin, iataDestiny){
        let keyDB = iataOrigin + "_" + iataDestiny;
        let arr = ['',''];
        let ticket = this.#db.consulta(keyDB);

        if(ticket != null){
            if(this.#cache.isInCache(iataOrigin)){
                console.log("Working Cache");
                arr[0] = this.#cache.getWeather(iataOrigin);
            }else{
                arr[0] = await this.#getRequest(ticket.getCoordinatesOrigin());
                this.#cache.addWeather(iataOrigin, arr[0]);
            }

            if(this.#cache.isInCache(iataDestiny)){
                console.log("Working Cache");
                arr[1] = this.#cache.getWeather(iataDestiny);
            }else{
                arr[1] = await this.#getRequest(ticket.getCoordinatesDestiny());
                this.#cache.addWeather(iataDestiny,arr[1]);
            }
            
        }

        return arr;
    }        
}

module.exports = Gestor;