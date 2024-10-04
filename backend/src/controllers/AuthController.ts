import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { hashSync } from "bcrypt";

export const handleLogin = (req: Request, res: Response) => {
  console.log("i got request");
};

export const handleRegistration = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const soltRound = 10;

  let passhash: string = hashSync(password, soltRound);

  const newUser = new UserModel({
    name: name,
    email: email,
    password: passhash,
  });

  await newUser.save().then((d) => {
    res.status(201).json({ message: "successful" });
  });

  res.end();
};
