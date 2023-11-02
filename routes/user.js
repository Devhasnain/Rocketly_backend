import express from "express";
import {
  user_registration,
  user_login,
} from "../controllers/user.js";
import { login_validation, register_validation } from "../validations/user_auth.js";

const router = express.Router();

// User registration endpo,int
router.post("/register", register_validation, user_registration);
router.post("/login", login_validation, user_login);

export default router;
