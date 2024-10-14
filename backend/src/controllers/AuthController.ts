import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { hashSync, compareSync } from "bcrypt";
import { generate } from "../auth/auth";

export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password)
  if (!email && !password) {
    res.status(401).json({error: 'bad request'})
    return 
  }
  const user = await UserModel.findOne(
    { email: email },
    { email: 1, name: 1, password: 1 }
  );
  if (!user) {
    res.status(401).json({ error: "email doesnt exist" });
    return;
  }

  if (!compareSync(password, user?.password)) {
    res.status(401).json({ error: "wrong password" });
    return;
  }

  const token = await generate({ name: user.name, email: user.email });

  res.status(200).json({ message: "successfull", token: token });
};

export const handleRegistration = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401).json({error: 'bad request'})
    return
  }

  const soltRound = 10;

  let passhash: string = hashSync(password, soltRound);

  const newUser = new UserModel({
    name: name,
    email: email,
    password: passhash,
  });

  await newUser.save().then(async (d) => {
    const token = await generate({ name: name, email: email });

    res.status(201).json({ message: "new user Created", token: token });
  });

  res.end();
};
