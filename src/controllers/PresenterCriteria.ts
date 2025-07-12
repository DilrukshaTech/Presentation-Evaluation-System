import express from "express";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createPresenterCriteria = async (req: Request, res: Response) => {
  try {
    const { presenterId, name, marks } = req.body;

    const newCriteria = await prisma.presenterCriteria.create({
      data: {
        presenterId,
        name,
        marks,
      },
    });

    res.status(201).json({
      message: "Presenter criteria created successfully",
      criteria: newCriteria,
    });
  } catch (error) {
    console.error("Error creating presenter criteria:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPresenterCriteriaById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const criteria = await prisma.presenterCriteria.findUnique({
      where: { id },
      include: {
        presenter: true,
      },
      omit: {
        presenterId: true,
      },
    });

    res.status(200).json(criteria);
  } catch (error) {
    console.error("Error fetching presenter criteria by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllPresenterCriteria = async (req: Request, res: Response) => {
  try {
    const criteriaList = await prisma.presenterCriteria.findMany({
      include: {
        presenter: true,
      },
      omit: {
        presenterId: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(criteriaList);
  } catch (error) {
    console.error("Error fetching all presenter criteria:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePresenterCriteriaById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, marks } = req.body;

    const updatedCriteria = await prisma.presenterCriteria.update({
      where: { id },
      data: {
        name,
        marks,
      },
    });

    res.status(200).json({
      message: "Presenter criteria updated successfully",
      criteria: updatedCriteria,
    });
  } catch (error) {
    console.error("Error updating presenter criteria by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};