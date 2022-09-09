const Request = require('../js/Request');

const tmp = new Request();

async function temporal(){
    const aux = await tmp.getWeather(25.7785, -100.107);

    console.log(aux);
}


temporal();




