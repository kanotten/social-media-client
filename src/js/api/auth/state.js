import { load, save } from "../../storage/index.js";

export const isLoggedIn = () => Boolean(load("token"));

export const profile = () => load("profile");

export const login = (token) => {
  save("authToken", token);
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
