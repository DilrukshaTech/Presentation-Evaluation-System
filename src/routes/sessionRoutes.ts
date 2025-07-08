import express from 'express';
import {  sessionCreateValidatorRules,sessionIdValidationRules} from '../validators/SessionValidator';


import { createSession,getAllSessions,getSessionById,updateSessionById,deleteAllSessions,deleteSessionById } from '../controllers/SessionController';
import { ValidateRequest } from '../middlewares/validatorRequest';

const router = express.Router();

router.post("/",sessionCreateValidatorRules,ValidateRequest,createSession);
router.get("/", getAllSessions);
router.get("/:id",sessionIdValidationRules,ValidateRequest,getSessionById );
router.patch("/:id",sessionIdValidationRules,ValidateRequest,updateSessionById);
router.delete("/",deleteAllSessions);
router.delete("/:id",sessionIdValidationRules,ValidateRequest,deleteSessionById);

export const sessionRoute = router;