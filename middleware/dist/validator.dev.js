"use strict";

var _require = require("express-validator"),
    check = _require.check,
    validationResult = _require.validationResult;

exports.signupValidator = [check("username").not().isEmpty().trim().withMessage("All fields required"), check("email").isEmail().normalizeEmail().withMessage("Invalid email"), check("password").isLength({
  min: 6
}).withMessage("Password must be at least 6 characters long")];
exports.signinValidator = [check("email").isEmail().normalizeEmail().withMessage("Invalid email"), check("password").isLength({
  min: 6
}).withMessage("Password must be at least 6 characters long")];

exports.validatorResult = function (req, res, next) {
  var result = validationResult(req);
  var hasErrors = !result.isEmpty();

  if (hasErrors) {
    var firstError = result.array()[0].msg;
    return res.status(400).json({
      errorMessage: firstError
    }); // USE FOR DEBUGGING
    // console.log("hasErrors: ", hasErrors);
    // console.log("result: ", result);
  }

  next();
};