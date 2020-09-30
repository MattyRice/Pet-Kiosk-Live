const express = require("express");
const router = express.Router();
const {
  signupValidator,
  signinValidator,
  validatorResult,
} = require("../middleware/validator");
const {
  signupController,
  signinController,
  isAuth,
  isAdmin,
} = require("../controllers/auth");

// router.post("/signup", (req, res) => {
//   console.log("Inside signup controller");
// });

// router.get("/secret/:_id", signinValidator, isAuth, (req, res) => {
//   res.json({
//     user: req.profile,
//   });
// });

router.post("/signup", signupValidator, validatorResult, signupController);
router.post("/signin", signinValidator, validatorResult, signinController);

module.exports = router;
