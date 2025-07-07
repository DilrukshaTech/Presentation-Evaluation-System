import express from "express";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createSession = async (req: Request, res: Response) => {
  try {
    const createEvent = await prisma.session.create({
      data: req.body,
      include: {
        event: true,
        sessionJudges: true,
        presenters: true,
      },
      omit: {
        eventId: true,
      },
    });
    res.status(201).json({
      message: "Session created successfully",
      session: createEvent,
    });
  } catch (error) {
    console.log("Error adding session", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllSessions = async (req: Request, res: Response) => {
  try {
    const sessions = await prisma.session.findMany({
      include: {
        event: true,
        sessionJudges: true,
        presenters: true,
      },
    });
    res.status(200).json(sessions);
  } catch (error) {
    console.error("Error fetching sessions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSessionById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    const session = await prisma.session.findUnique({
      where: { id },
      include: {
        event: true,
        sessionJudges: true,
        presenters: true,
      },
    });

    res.status(200).json(session);
  } catch (error) {
    console.error("Error fetching session by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
