const fetch = require('node-fetch');

class Request{

    constructor(){}

    async getWeather(latitude, longitude, key){
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5a1b08c966f8f65b94268d9a7e5f714d&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    }
}


module.exports = Request;