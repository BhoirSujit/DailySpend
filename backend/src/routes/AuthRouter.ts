import { Router } from "express";
import { handleLogin, handleRegistration } from "../controllers/AuthController";

const router = Router();

router.post('/login', handleLogin);
router.post('/register', handleRegistration)

export default router;