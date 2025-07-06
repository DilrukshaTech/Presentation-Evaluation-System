
import express from 'express';
import { AddEvent,GetAllEvents } from '../controllers/EventController';
import { eventValidatorRules,eventIdValidatorRules } from '../validators/EventValidator';
import { ValidateRequest } from '../middlewares/validatorRequest';

const router=express.Router();

router.post("/", eventValidatorRules,ValidateRequest,AddEvent)
router.get("/",GetAllEvents)
router.get("/:id",eventIdValidatorRules, ValidateRequest, GetAllEvents);

export const eventRoute = router;