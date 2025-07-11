import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPresenter = async (req: Request, res: Response) => {
  try {
    const { type, groupName, marks, sessionId } = req.body;
    const member= req.body as { memberId: number }[];
    const newPresenter = await prisma.presenter.create({
      data: {
        type,
        groupName,
        marks,
        sessionId: sessionId,
        memberId: member.map((m) => m.memberId),

      
    });

    res.status(201).json({
      message: "Presenter created successfully",
      presenter: newPresenter,
    });
  } catch (error) {
    console.error("Error creating presenter:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPresenterById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const presenter = await prisma.presenter.findUnique({
      where: { id },
    });
    res.status(200).json(presenter);
  } catch (error) {
    console.error("Error fetching presenter by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllPresenters = async (req: Request, res: Response) => {
  try {
    const presenters = await prisma.presenter.findMany();
    res.status(200).json(presenters);
  } catch (error) {
    console.error("Error fetching all presenters:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

