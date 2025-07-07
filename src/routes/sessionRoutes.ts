import express from 'express';
import {  sessionCreateValidatorRules,sessionIdValidationRules} from '../validators/SessionValidator';


import { createSession,getAllSessions,getSessionById } from '../controllers/SessionController';
import { ValidateRequest } from '../middlewares/validatorRequest';
const router = express.Router();

router.post("/",sessionCreateValidatorRules,ValidateRequest,createSession);
router.get("/", getAllSessions);
router.get("/:id",sessionIdValidationRules,ValidateRequest,getSessionById );

export const sessionRoute = router;