import { Router } from "express";

import * as ExpensesController from "../controller/expenses";

const router = Router();

router.get("/", ExpensesController.getExpenses);
router.get("/:expenseId", ExpensesController.getExpense);
router.post("/", ExpensesController.addExpenses);
router.put("/:expenseId", ExpensesController.updateExpenses);
router.delete("/:expenseId", ExpensesController.deleteExpense);

export default router;
