import { Router } from "express";
import * as UsersController from "../controller/users";

const router = Router();

router.post("/login", UsersController.logIn);
router.post("/signup", UsersController.signUp);

export default router;
