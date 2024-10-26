import { Router } from "express";

import * as Expenses from "../controller/expenses"

const router = Router();

//add expenses 

router.get("/", Expenses.getExpenses);
router.get("/:expenseId", Expenses.getExpense);
router.post("/",  Expenses.addExpenses);
router.put("/:expenseId", Expenses.updateExpenses);
router.delete("/:expenseId", Expenses.deleteExpense);


export default router;