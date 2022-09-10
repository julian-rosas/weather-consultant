const index = (req, res, next) => {
    res.render('index', {
        title: 'Aeropuerto CDMX'
    });
};

const viewWeather = (req, res, next) => {
    res.render('clima', {
        title: 'Clima'
    });
};

const getWeather = (req, res, next) => {
    let s = req.body.iataCodeOrigen;
    let q = req.body.iataCodeDestiny;
    console.log(s);
    console.log(q);
    res.redirect('/viewweather');
};



module.exports = {
    index,
    viewWeather,
    getWeather
}