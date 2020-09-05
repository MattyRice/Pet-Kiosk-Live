const express = require("express");
const router = express.Router();
const { create } = require("../controllers/category");

// router.post("/signup", (req, res) => {
//   console.log("Inside signup controller");
// });

router.post(
  "/category/create",
  signupValidator,
  validatorResult,
  signupController
);
router.post("/signin", signinValidator, validatorResult, signinController);

module.exports = router;
