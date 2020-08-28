"use strict";

var User = require("../models/User");

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");

var _require = require("../config/key"),
    jwtSecret = _require.jwtSecret,
    jwtExpire = _require.jwtExpire;

exports.signupController = function _callee(req, res) {
  var _req$body, username, email, password, user, emailAddress, newUser, salt;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            username: username
          }));

        case 4:
          user = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 7:
          emailAddress = _context.sent;

          if (!(user || emailAddress)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errorMessage: "Account already exists"
          }));

        case 10:
          newUser = new User();
          newUser.username = username;
          newUser.email = email;
          _context.next = 15;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 15:
          salt = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 18:
          newUser.password = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(newUser.save());

        case 21:
          res.json({
            successMessage: "Registration successful! Please sign in."
          });
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](1);
          console.log("signupController error: ", _context.t0);
          res.status(500).json({
            errorMessage: "Server error"
          });

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 24]]);
};

exports.signinController = function _callee2(req, res) {
  var _req$body2, email, password, user, isMatch, payload;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errorMessage: "Invalid credentials"
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isMatch = _context2.sent;

          if (isMatch) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errorMessage: "Invalid Credentials"
          }));

        case 12:
          //PREP PAYLOAD
          payload = {
            user: {
              _id: user._id
            }
          };
          _context2.next = 15;
          return regeneratorRuntime.awrap(jwt.sign(payload, jwtSecret, {
            expiresIn: jwtExpire
          }, function (err, token) {
            var _id = user._id,
                username = user.username,
                email = user.email,
                role = user.role;
            res.json({
              token: token,
              user: {
                _id: _id,
                username: username,
                email: email,
                role: role
              }
            });
          }));

        case 15:
          _context2.next = 21;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](1);
          console.log("signinController error: ", _context2.t0);
          res.status(500).json({
            errorMessage: "Server error"
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 17]]);
};