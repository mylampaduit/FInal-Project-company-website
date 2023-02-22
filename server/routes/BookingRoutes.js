import express from "express";
const router = express.Router();
import {
  AddEmployee,
  getALLEmployees,
} from "../controllers/BookingControllers.js";

router.post(
  "/booking",

  AddEmployee
);
router.get(
  "/booking",

  getALLEmployees
);

export default router;
