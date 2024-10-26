// types/express.d.ts
import { JwtPayload } from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload & { userId: string }; // Define userId or other properties here
  }
}
