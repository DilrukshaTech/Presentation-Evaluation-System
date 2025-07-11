import express from "express";
import { ValidateRequest } from "../middlewares/validatorRequest";
import { createPresenter } from "../controllers/PresenterController";
import { presenterCreationValidatorRules } from "../validators/PresentorValidator";

const router = express.Router();

router.post("/",presenterCreationValidatorRules, ValidateRequest,createPresenter)

export const presenterRoute = router;