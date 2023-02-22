import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  loggedIn,
} from "../controllers/userControllers.js";

import { isAuthenticated, isAuthorized } from "../middleware/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/loggedin", loggedIn);
router.get("/logout", logout);

export default router;
