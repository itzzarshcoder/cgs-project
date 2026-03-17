
import express from "express";
import { allReports, getReportsByDateRange } from "../controllers/reportController.js";
import protect, { adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ================= ALL REPORTS ROUTE ================= */
router.get("/all", protect, adminOnly, allReports);

/* ================= DATE RANGE REPORTS ROUTE ================= */
router.get("/date-range", protect, adminOnly, getReportsByDateRange);

export default router;
