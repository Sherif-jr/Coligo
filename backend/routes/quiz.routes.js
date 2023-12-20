import { Router } from "express";
import {
  addNewQuiz,
  deleteQuiz,
  editQuiz,
  getAllQuizzes,
} from "../controller/quiz.controller";
import {
  joiValidatorBody,
  joiValidatorParams,
} from "../middleware/joiValidator";
import { quizSchema } from "../joi/quiz.joi";
import { idSchema } from "../joi/id.joi";

const router = Router();

router.get("/", getAllQuizzes);
router.post("/", joiValidatorBody(quizSchema), addNewQuiz);
router.delete("/:id", joiValidatorParams(idSchema), deleteQuiz);
router.put(
  "/:id",
  joiValidatorParams(idSchema),
  joiValidatorBody(announcementSchema),
  editQuiz
);

export default router;
