"use strict";

var User = require("../models/User");

var bcrypt = require("bcryptjs");

exports.signupController = function _callee(req, res) {
  var _req$body, username, email, password, user, newUser, salt;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context.sent;

          if (!user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errorMessage: "Email already exists"
          }));

        case 7:
          newUser = new User();
          newUser.username = username;
          newUser.email = email;
          _context.next = 12;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 12:
          salt = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 15:
          newUser.password = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(newUser.save());

        case 18:
          res.json({
            successMessage: "Registration successful! Please sign in."
          });
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](1);
          console.log("signupController error: ", _context.t0);
          res.status(500).json({
            errorMessage: "Server error"
          });

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 21]]);
};