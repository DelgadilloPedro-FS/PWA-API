const express = require("express");
const router = new express.Router();
const userCtlr = require("../controllers/user.js");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const utils = require("../middlewares/utils.js");

router.post(
  "/signup",
  jsonParser,
  utils.vaildateName,
  utils.vaildateEmail,
  utils.vaildatePhone,
  utils.vaildatePassword,
  utils.vaildateBirthday,
  userCtlr.signup
);

module.exports = router;
