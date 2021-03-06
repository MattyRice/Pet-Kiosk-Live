const { check, validationResult } = require("express-validator");

//Checks if all sign up variables are valid
exports.signupValidator = [
  check("username").not().isEmpty().trim().withMessage("All fields required"),
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

//Checks if all sign in variables are valid
exports.signinValidator = [
  check("email").isEmail().normalizeEmail().withMessage("Invalid Credentials"),
  check("password").isLength({ min: 6 }).withMessage("Invalid Credentials"),
];

//Error returned to client
exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(400).json({
      errorMessage: firstError,
    });

    // USE FOR DEBUGGING
    // console.log("hasErrors: ", hasErrors);
    // console.log("result: ", result);
  }

  next();
};
