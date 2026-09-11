const express = require('express');
const router = express.Router();
const {addUser , getUser} = require('../controller/users.js');

router.post("/",addUser);

router.get("/",getUser);

module.exports = router;