import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeographfy,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeographfy);

export default router;
