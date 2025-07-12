import express from "express";
import {
  createPresenterCriteria,
  getPresenterCriteriaById,
  getAllPresenterCriteria,
  updatePresenterCriteriaById,
  deleteAllPresenterCriteria,
  deletePresenterCriteriaById
} from "../controllers/PresenterCriteria";
import { criteriaCreateValidatorRules,criteriaIdValidatorRules } from "../validators/CriteriaValidator";
import {ValidateRequest} from "../middlewares/validatorRequest";

const router = express.Router();
router.post("/", criteriaCreateValidatorRules, ValidateRequest,createPresenterCriteria);
router.get("/:id",criteriaIdValidatorRules,ValidateRequest, getPresenterCriteriaById);
router.get("/", getAllPresenterCriteria);
router.patch("/:id",criteriaIdValidatorRules,ValidateRequest, updatePresenterCriteriaById);
router.delete("/", deleteAllPresenterCriteria);
router.delete("/:id",criteriaIdValidatorRules,ValidateRequest,deletePresenterCriteriaById);

export const criteriaRoutes = router;
