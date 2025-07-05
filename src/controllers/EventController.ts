import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AddEvent = async (req: express.Request, res: express.Response) => {
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
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
