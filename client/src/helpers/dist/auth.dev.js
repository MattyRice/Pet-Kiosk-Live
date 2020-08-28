"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = exports.setAuthentication = void 0;

var _cookies = require("./cookies");

var _localStorage = require("./localStorage");

var setAuthentication = function setAuthentication(token, user) {
  (0, _cookies.setCookie)("token", token);
  (0, _localStorage.setLocalStorage)("user", user);
};

exports.setAuthentication = setAuthentication;

var isAuthenticated = function isAuthenticated() {
  if ((0, _cookies.getCookie)("token") && (0, _localStorage.getLocalStroage)("user")) {
    return (0, _localStorage.getLocalStroage)("user");
  } else {
    return false;
  }
};

exports.isAuthenticated = isAuthenticated;