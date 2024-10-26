import express, { Response, Request, NextFunction } from "express";
import ExpenseRoute from "./routes/expenses";
import morgan from "morgan";
import { isHttpError } from "http-errors";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/expenses", ExpenseRoute);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {

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
