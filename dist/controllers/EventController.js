"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEvent = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const AddEvent = async (req, res) => {
    try {
        const newEvent = await prisma.event.create({
            data: {
                name: req.body.name,
                date: new Date(req.body.date),
            },
        });
        res.status(201).json({
            message: "Event added successfully",
            event: newEvent,
        });
    }
    catch (error) {
        console.error("Error adding event:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.AddEvent = AddEvent;
//# sourceMappingURL=EventController.js.map