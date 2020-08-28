"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCookie = exports.getCookie = exports.setCookie = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setCookie = function setCookie(key, value) {
  _jsCookie["default"].set(key, value, {
    expires: 1
  });
};

exports.setCookie = setCookie;

var getCookie = function getCookie(key) {
  return _jsCookie["default"].get(key);
};

exports.getCookie = getCookie;

var deleteCookie = function deleteCookie(key) {
  _jsCookie["default"].remove(key);
};

exports.deleteCookie = deleteCookie;