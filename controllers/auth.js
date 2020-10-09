const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/key");

exports.signupController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //Checks if existing user exists in database with the same credentials
    const user = await User.findOne({ username });
    const emailAddress = await User.findOne({ email });
    if (user || emailAddress) {
      return res.status(400).json({
        errorMessage: "Account already exists",
      });
    }

    //New user is created
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;

    //Password hashing
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    res.json({
      successMessage: "Registration successful! Please sign in.",
    });
  } catch (err) {
    console.log("signupController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errorMessage: "Invalid credentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid Credentials",
      });
    }

    //PREP PAYLOAD
    const payload = {
      user: {
        _id: user._id,
      },
    };

    await jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: jwtExpire },
      (err, token) => {
        const { _id, username, email, role } = user;

        res.json({
          token,
          user: { _id, username, email, role },
        });
      }
    );
  } catch (err) {
    console.log("signinController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

//Checks if user is an authorized registered user
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      errorMessage: "Access Denied",
    });
  }
};

//Check if a user is an admin role (role=2 in db)
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      errorMessage: "Not Admin. Access Denied",
    });
  }
  next();
};
