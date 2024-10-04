import axios from "axios";
import { backendaddress } from "../config/config";

type usersData = {
  name: string;
  email: string;
  password: string;
};

export const registerUser = async (data: usersData) => {
  await axios
    .post(backendaddress + "/api/user/register", data)
    .then((d) => {
      console.log(d);
    })
    .catch((e) => {
      console.log(e);
    });
};
