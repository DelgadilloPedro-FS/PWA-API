const express = require('express');
const router = express.Router();
const userCtlr = require('../controllers/user');
const utils = require('@petedillo/utils');

router.post('/signup', utils.validateEmail, utils.validatePhone, utils.validateBirthday, utils.validatePassword, userCtlr.signup);
module.exports = router;