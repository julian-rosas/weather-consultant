const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');


router.get("/", indexController.index);
router.post("/getweather", indexController.getWeather);
router.get("/viewweather", indexController.viewWeather);

module.exports = router;