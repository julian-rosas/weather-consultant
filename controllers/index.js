const index = (req, res, next) => {
    res.render('index', {
        title: 'Aeropuerto CDMX'
    });
};

module.exports = {
    index
}