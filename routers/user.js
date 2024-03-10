const express = require('express');
const router = express.Router();
const userCtlr = require('../controllers/user');
const utils = require('../middlewares/utils');

router.post('/signup', utils.vaildateEmail, utils.vaildatePhone, utils.vaildateBirthday, utils.vaildatePassword, userCtlr.signup);

module.exports = router;

