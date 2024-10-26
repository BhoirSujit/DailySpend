import { RequestHandler } from "express";
import env, { isValidEmail, isValidName, isValidPassword } from "../utils/validate";
import { compare, hash } from "bcrypt";
import createHttpError from "http-errors";
import UsersModel from "../model/users";
import { sign } from "jsonwebtoken";

interface SignUpBody {
  name: string;
  email: string;
  password: string;
}

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!isValidName(name)) throw createHttpError(400, "Not a valid Name");
    if (!isValidEmail(email)) throw createHttpError(400, "Not a valid Email");
    if (!isValidPassword(password))
      throw createHttpError(400, "Not a valid Password");

    //check if user already exist
    const existingUser = await UsersModel.findOne({ email: email });
    if (existingUser) throw createHttpError(409, "User already exists");

    //create user
    const hashPass = await hash(password, 10);

    const newUser = new UsersModel({
      name: name,
      email: email,
      password: hashPass,
    });

    await newUser.save();

    //generate token
    const token = await sign({userId : newUser._id, email: newUser.email}, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRATION});

    res.status(201).json({token : token, user : newUser});
  } catch (error) {
    next(error);
  }
};

interface LogInBody {
  email: string;
  password: string;
}

export const logIn: RequestHandler<
  unknown,
  unknown,
  LogInBody,
  unknown
> = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!isValidEmail(email)) throw createHttpError(400, "Not a valid Email");
    if (!isValidPassword(password))
      throw createHttpError(400, "Not a valid Password");

    //check if your exist or not
    const user = await UsersModel.findOne({ email: email })
      .select("+password +email")
      .exec();
    if (!user) throw createHttpError(401, "Invalid Credentials");

    //verify
    const passMatch = await compare(password, user.password);
    if (!passMatch) throw createHttpError(401, "Invalid Password");

    const token = await sign({userId : user._id, email: user.email}, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRATION});

    res.status(201).json({token, user});
   
  } catch (error) {
    next(error);
  }
};


