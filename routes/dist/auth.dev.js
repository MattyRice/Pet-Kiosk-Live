"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../middleware/validator"),
    signupValidator = _require.signupValidator,
    validatorResult = _require.validatorResult;

var _require2 = require("../controllers/auth"),
    signupController = _require2.signupController; // router.post("/signup", (req, res) => {
//   console.log("Inside signup controller");
// });


router.post("/signup", signupValidator, validatorResult, signupController);
module.exports = router;