import express, { Response, Request, NextFunction } from "express";
import ExpenseRoute from "./routes/expenses";
import UsersRouter from "./routes/users";
import morgan from "morgan";
import { isHttpError } from "http-errors";
import authenticateToken from "./middleware/auth";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/users", UsersRouter);
app.use("/api/v1/expenses", authenticateToken, ExpenseRoute);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let status = 500;
  let message = "An unknown error occur";

  if (isHttpError(error)) {
    status = error.status;
    message = error.message;
  }

  res.status(status).json({
    error: message,
  });
});

export default app;
