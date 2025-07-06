
import express from 'express';
import { AddEvent,GetAllEvents,updateEventById } from '../controllers/EventController';
import {  eventCreateValidatorRules,eventIdValidatorRules} from '../validators/EventValidator';
import { ValidateRequest } from '../middlewares/validatorRequest';

const router=express.Router();

router.post("/", eventCreateValidatorRules,ValidateRequest,AddEvent)
router.get("/",GetAllEvents)
router.get("/:id",eventIdValidatorRules, ValidateRequest, GetAllEvents);
router.patch("/:id",eventIdValidatorRules,ValidateRequest, updateEventById);

export const eventRoute = router;