import express from "express";
import {
  createPresenterCriteria,
  getPresenterCriteriaById,
  getAllPresenterCriteria,
} from "../controllers/PresenterCriteria";

const router = express.Router();
router.post("/", createPresenterCriteria);
router.get("/:id", getPresenterCriteriaById);
router.get("/", getAllPresenterCriteria);

export const criteriaRoutes = router;
