"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signup = function signup(data) {
  var config, response;
  return regeneratorRuntime.async(function signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config = {
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("/api/auth/signup", data, config));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.signup = signup;

var signin = function signin(data) {
  var config, response;
  return regeneratorRuntime.async(function signin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          config = {
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("/api/auth/signin", data, config));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.signin = signin;