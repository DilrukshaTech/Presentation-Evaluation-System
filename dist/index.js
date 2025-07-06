"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventRoutes_1 = require("./routes/eventRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/events", eventRoutes_1.eventRoute);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map