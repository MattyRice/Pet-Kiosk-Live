import { setCookie, getCookie } from "./cookies";
import { setLocalStorage, getLocalStroage } from "./localStorage";

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
