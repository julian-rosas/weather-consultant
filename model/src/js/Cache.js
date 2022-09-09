class Cache{
    #dict = {};

    constructor(){}

    addWeather(iataCity, weather){
        this.#dict[iataCity] = weather;
    }

    isInCache(iataCity){
        return this.#dict[iataCity] != null;
    }

    getWeather(iataCity){
        if(this.isInCache(iataCity)){
            //encontro
            return this.#dict[iataCity];
        }
    }

}


module.exports = Cache;