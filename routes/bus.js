const express = require('express');
const router = express.Router();
const {addBus , getAvailableBus} = require('../controller/bus.js')

router.post("/",addBus);

router.get("/available/:seats",getAvailableBus);

module.exports = router