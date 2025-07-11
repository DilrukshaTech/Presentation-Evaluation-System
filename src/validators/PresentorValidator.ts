import { body, param } from "express-validator";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const presenterCreationValidatorRules = [
  body("type")
    .notEmpty()
    .withMessage("Type is required")
    .isIn(["individual", "group"])
    .withMessage("Type must be either 'individual' or 'group'"),

  body("groupName")
    .optional()
    .isString()
    .withMessage("Group name must be a string")
    .isLength({ min: 1 })
    .withMessage("Group name must not be empty"),
  body("marks")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Marks must be a non-negative integer"),
  body("sessionId")
    .notEmpty()
    .withMessage("Session ID is required")
    .isInt()
    .withMessage("Session ID must be an integer")
    .custom(async (value) => {
      const session = await prisma.session.findUnique({
        where: { id: value },
      });
      if (!session) {
        throw new Error("Session ID does not exist");
      }
      return true;
    }),
  body("memberId")
    .notEmpty()
    .withMessage("Member ID is required")
    .isInt()
    .withMessage("Member ID must be an integer")
    .custom(async (value) => {
      const member = await prisma.members.findUnique({
        where: { id: value },
      });
      if (!member) {
        throw new Error("Member ID does not exist");
      }
      return true;
    }),
];


export const presenterIdValidationRules = [
  param("id")
    .notEmpty()
    .withMessage("Presenter ID is required")
    .isInt()
    .withMessage("Presenter ID must be an integer")
    .custom(async (value) => {
      const presenter = await prisma.presenter.findUnique({
        where: { id: value },
      });
      if (!presenter) {
        throw new Error("Presenter ID does not exist");
      }
      return true;
    }),

];