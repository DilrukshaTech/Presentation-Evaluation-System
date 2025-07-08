
import express from 'express';
import { createJudgeSession,getAllSessionJudges,getSessionJudgeById} from '../controllers/JudgeSessionController';
import { ValidateRequest } from '../middlewares/validatorRequest';
import { sessionJudgesValidatorRules,sessionJudgeIdValidationRules } from '../validators/SessionJudgeValidator';
const router=express.Router();

router.post('/', sessionJudgesValidatorRules, ValidateRequest, createJudgeSession);
router.get('/', getAllSessionJudges);
router.get('/:id',sessionJudgeIdValidationRules,ValidateRequest, getSessionJudgeById);

export const judgeSessionRoute = router;