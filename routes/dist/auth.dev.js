"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../middleware/validator"),
    signupValidator = _require.signupValidator,
    signinValidator = _require.signinValidator,
    validatorResult = _require.validatorResult;

var _require2 = require("../controllers/auth"),
    signupController = _require2.signupController,
    signinController = _require2.signinController; // router.post("/signup", (req, res) => {
//   console.log("Inside signup controller");
// });


router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);
module.exports = router;