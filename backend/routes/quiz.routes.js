import { Router } from "express";
import {
  addNewQuiz,
  deleteQuiz,
  editQuiz,
  getAllQuizzes,
} from "../controller/quiz.controller.js";
import {
  joiValidatorBody,
  joiValidatorParams,
} from "../middleware/joiValidator.js";
import { quizSchema } from "../joi/quiz.joi.js";
import { idSchema } from "../joi/id.joi.js";

const router = Router();

router.get("/", getAllQuizzes);
router.post("/", joiValidatorBody(quizSchema), addNewQuiz);
router.delete("/:id", joiValidatorParams(idSchema), deleteQuiz);
router.put(
  "/:id",
  joiValidatorParams(idSchema),
  joiValidatorBody(quizSchema),
  editQuiz
);

export default router;
