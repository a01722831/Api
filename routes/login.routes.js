import { Router } from "express";
import { login } from "../controllers/login.controllers.js";

const router = Router();

// Route for login
router.post("/login", login);

export default router;
