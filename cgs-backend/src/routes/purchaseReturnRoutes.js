import express from "express";
import {
  addPurchaseReturn,
  getAllPurchaseReturns,
  getPurchaseReturnById,
  updatePurchaseReturnStatus,
  updatePurchaseReturn,
  deletePurchaseReturn,
  getPurchaseReturnsByDateRange,
} from "../controllers/purchaseReturnController.js";

import protect, { adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * Purchase Return Routes
 */

// ➕ Add purchase return
router.post("/add", protect, adminOnly, addPurchaseReturn);

// 📄 Get all purchase returns
router.get("/all", protect, adminOnly, getAllPurchaseReturns);

// 📅 Get purchase returns by date range
router.get("/date-range", protect, adminOnly, getPurchaseReturnsByDateRange);

// 🔍 Get single purchase return
router.get("/:id", protect, adminOnly, getPurchaseReturnById);

// 🔄 Update return status (APPROVED / CANCELLED etc.)
router.put("/status/:id", protect, adminOnly, updatePurchaseReturnStatus);

// ✏️ Update purchase return (items / reason)
router.put("/update/:id", protect, adminOnly, updatePurchaseReturn);

// 🗑️ Delete purchase return
router.delete("/delete/:id", protect, adminOnly, deletePurchaseReturn);

export default router;
