import express from "express";
import {
  getTransactionsByUserId,
  createTransaction,
  deleteransaction,
  getSummaryByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);
router.post("/", createTransaction);
router.delete("/:id", deleteransaction);
router.get("/summary/:userId", getSummaryByUserId);

export default router;
