import axios from "axios";
import { backendaddress } from "../config/config";
import { deleteToken } from "../service/auth";

interface LoginData {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginData) => {
  const response = await axios.post(backendaddress + "/api/v1/users/login", {
    email,
    password,
  });

  return response.data;
};

export const signup = async ({ name, email, password }: SignUpData) => {
  const response = await axios.post(backendaddress + "/api/v1/users/signup", {
    name,
    email,
    password,
  });

  return response.data;
};

export const logout = async () => {
  deleteToken();
  window.location.href = "/login";
};
