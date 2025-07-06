"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidatorRules = void 0;
const express_validator_1 = require("express-validator");
exports.eventValidatorRules = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Name is required")
        .isString()
        .withMessage("Event name must be a string"),
    (0, express_validator_1.body)("date")
        .notEmpty()
        .withMessage("Date is required")
        .isISO8601()
        .withMessage("Date must be a valid ISO 8601 date"),
];
//# sourceMappingURL=EventValidator.js.map