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
        return json.main.temp;
    }


    manage(iataOrigin, iataDestiny){
        let keyDB = iataOrigin + "_" + iataDestiny;
        let arr = ['',''];
        let ticket = this.#db.consulta(keyDB);

        if(ticket != null){
            if(this.#cache.isInCache(iataOrigin)){
                arr[0] = this.#cache.getWeather(iataOrigin);
            }else{
                arr[0] = this.#getRequest(ticket.getCoordinatesOrigin());
                this.#cache.addWeather(iataOrigin, arr[0]);
            }

            if(this.#cache.isInCache(iataDestiny)){
                arr[1] =  this.#cache.getWeather(iataDestiny);
            }else{
                arr[1] = this.#getRequest(ticket.getCoordinatesDestiny());
                this.#cache.addWeather(iataOrigin,arr[1]);
            }
            
        }

        return arr;
    }        




}