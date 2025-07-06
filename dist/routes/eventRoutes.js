"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRoute = void 0;
const express_1 = __importDefault(require("express"));
const EventController_1 = require("../controllers/EventController");
const EventValidator_1 = require("../validators/EventValidator");
const validatorRequest_1 = require("../middlewares/validatorRequest");
const router = express_1.default.Router();
router.post("/", EventValidator_1.eventValidatorRules, validatorRequest_1.ValidateRequest, EventController_1.AddEvent);
exports.eventRoute = router;
//# sourceMappingURL=eventRoutes.js.map