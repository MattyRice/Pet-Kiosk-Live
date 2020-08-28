"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteLocalStorage = exports.getLocalStroage = exports.setLocalStorage = void 0;

var setLocalStorage = function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

exports.setLocalStorage = setLocalStorage;

var getLocalStroage = function getLocalStroage(key) {
  return JSON.parse(localStorage.getItem(key));
};

exports.getLocalStroage = getLocalStroage;

var deleteLocalStorage = function deleteLocalStorage(key) {
  localStorage.removeItem(key);
};

exports.deleteLocalStorage = deleteLocalStorage;