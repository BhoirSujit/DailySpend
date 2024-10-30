import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";
import expensesModel, { Expenses } from "../model/expenses";
import { isValidObjectId } from "mongoose";
import { JwtPayload } from "jsonwebtoken";

interface ExpensesBody {
  item: string;
  amount: number;
  date: string,
  category: string;
}

export const getExpenses: RequestHandler = async (req, res, next) => {
  try {
    //@ts-ignore
    const userId = req.user.userId;

    const expenses = await expensesModel.find({ userId: userId });

    res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
};

interface ExpensesParams {
  expenseId: string;
  [key: string]: string;
}

export const getExpense: RequestHandler<
  ExpensesParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  const expenseId = req.params.expenseId;
  try {
    //@ts-ignore
    const userId = req.user.userId;

    if (!isValidObjectId(expenseId)) throw createHttpError(400, "Invalid id");

    const expenses = await expensesModel.findById(expenseId);

    //check if user own this expense or not
    if (expenses?.userId != userId)
      throw createHttpError(404, "Expense Record not Found");

    if (!expenses) throw createHttpError(404, "Expense Record not Found");

    res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
};

export const addExpenses: RequestHandler<any, any, ExpensesBody, any> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { item, amount, category, date } = req.body;
  //@ts-ignore
  const userId = req.user.userId;

  try {
    //400 = bad request
    if (!item) throw createHttpError(400, "body must contain item");
    if (!amount) throw createHttpError(400, "body must contain amount");
    if (!category) throw createHttpError(400, "body must contain category");

    const newExpenses = new expensesModel({
      userId: userId,
      item: item,
      amount: amount,
      date: date,
      category: category,
    });

    await newExpenses.save();
    res.status(201).json(newExpenses);
  } catch (error) {
    next(error);
  }
};

interface UpdateExpensesParams {
  expenseId: string;
  [key: string]: string;
}

export const updateExpenses: RequestHandler<
  UpdateExpensesParams,
  unknown,
  ExpensesBody,
  unknown
> = async (req, res, next) => {
  const { item, amount, category, date } = req.body;

  try {
    if (!item) throw createHttpError(400, "body must contain item");
    if (!amount) throw createHttpError(400, "body must contain amount");
    if (!category) throw createHttpError(400, "body must contain category");

    const updatedExpenses = await expensesModel.findByIdAndUpdate(
      req.params.expenseId,
      {
        item: item,
        amount: amount,
        date: date,
        category: category,
      },
      { new: true, runValidators: true }
    );

    if (!updatedExpenses)
      throw createHttpError(404, "Expense Record not Found");

    res.status(200).json(updatedExpenses);
  } catch (error) {
    next(error);
  }
};

interface DeleteExpensesParams {
  expenseId: string;
  [key: string]: string;
}

export const deleteExpense: RequestHandler<
  DeleteExpensesParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  const expenseId = req.params.expenseId;
  try {

     //@ts-ignore
     const userId = req.user.userId;

    if (!isValidObjectId(expenseId)) throw createHttpError(400, "Invlaid Id");

    const expense = await expensesModel.findById(expenseId);

    if (!expense) throw createHttpError(404, "Expense Record not Found");

    //check if user own this expense or not
    if (expense?.userId != userId)
      throw createHttpError(404, "Expense Record not Found");

    await expense.deleteOne();

    //204 means not content
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
