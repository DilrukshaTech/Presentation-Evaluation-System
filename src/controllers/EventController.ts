import express from "express";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

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

export const GetAllEvents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getEventById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    const event = await prisma.event.findUnique({
      where: { id },
    });
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    throw new Error("Internal server error");
  }
};
