import { setCookie, getCookie, deleteCookie } from "./cookies";
import {
  setLocalStorage,
  getLocalStroage,
  deleteLocalStorage,
} from "./localStorage";

export const setAuthentication = (token, user) => {
  setCookie("token", token);
  setLocalStorage("user", user);
};

export const isAuthenticated = () => {
  if (getCookie("token") && getLocalStroage("user")) {
    return getLocalStroage("user");
  } else {
    return false;
  }
};

export const logout = (next) => {
  deleteCookie("token");
  deleteLocalStorage("user");

  next();
};
