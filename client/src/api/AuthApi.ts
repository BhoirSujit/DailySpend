import axios from "axios";
import { backendaddress } from "../config/config";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

type usersData = {
  name?: string;
  email: string;
  password: string;
};

export const registerUser = async (data: usersData) => {
  
  await axios
    .post(backendaddress + "/api/user/register", data)
    
    .catch((e) => {
      console.log(e);
    });
};

export const loginUser = async (data: usersData) => {
  
  const d = await axios.post(backendaddress+"/api/user/login", data)
  .catch(e => {
    console.log(e);
  })

  return d.data;

}

export const verifyUser = async (token: string) => {
  axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')!;

  const d = await axios.post(backendaddress+"/api/user/verify", token)
  .catch(e => {
    console.log(e);
  })

  return d.data;
}