import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { verify, JwtPayload } from "jsonwebtoken";
import env from "../utils/validate";

interface AuthRequest extends Request {
  user?: string | JwtPayload;
}

const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.headers)
    
    const authHeader = req.headers.authorization as string;
    if(!authHeader) throw createHttpError(400, "Dont have credentials in request");
    const token = authHeader.split(" ")[1];
    if (!token) throw createHttpError(403, "Access Denied");

    verify(token, env.JWT_SECRET, (err, user) => {
      if (err) throw createHttpError(403, "Access Denied");

      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

export default authenticateToken;
