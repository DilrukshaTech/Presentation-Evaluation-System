"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRequest = void 0;
const express_validator_1 = require("express-validator");
const ValidateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ error: errors.array() });
    }
    next();
};
exports.ValidateRequest = ValidateRequest;
//# sourceMappingURL=validatorRequest.js.map