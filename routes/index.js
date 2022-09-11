const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');


router.get("/", indexController.index);
router.post("/getweather", indexController.getWeather);

module.exports = router;