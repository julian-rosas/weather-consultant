const { response } = require('express');
const Gestor = require('../model/src/js/Gestor');
const gestor = new Gestor();

const index = (req, res, next) => {
    res.render('index', {
        title: 'Aeropuerto CDMX',
        mensage: ''
    });
};

const getWeather = async (req, res, next) => {
    let iataOrigin = req.body.iataCodeOrigen;
    let iataDestiny = req.body.iataCodeDestiny;
    console.log("post - " + iataOrigin);
    console.log("post - " + iataDestiny);
    let data = await gestor.manage(iataOrigin, iataDestiny);
    console.log("Petición api: " + data);
    if (data[0] === '') {
        res.render('index', {
            title: 'Aeropuerto CDMX',
            mensage: "Código iata de origen o destino no válido."
        });
        return;
    }

    res.render('clima', {
        title: 'Clima',
        nameOrigin: iataOrigin,
        nameDestiny: iataDestiny,
        vuelo: `${iataOrigin}-${iataDestiny}`,
        tempOrigin: `${data[0]}°C`,
        tempDestiny: `${data[1]}°C`
    });
};



module.exports = {
    index,
    getWeather
}