
import express from 'express';
import { AddEvent,GetAllEvents,getEventById ,updateEventById,deleteEventById } from '../controllers/EventController';
import {  eventCreateValidatorRules,eventIdValidatorRules} from '../validators/EventValidator';
import { ValidateRequest} from '../middlewares/validatorRequest';

const router=express.Router();

router.post("/", eventCreateValidatorRules,ValidateRequest, AddEvent)
router.get("/",GetAllEvents)
router.get("/:id",eventIdValidatorRules, ValidateRequest, getEventById );
router.patch("/:id",eventIdValidatorRules,ValidateRequest, updateEventById);
router.delete("/:id",eventIdValidatorRules,ValidateRequest, deleteEventById);

export const eventRoute = router;