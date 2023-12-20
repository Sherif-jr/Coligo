import QuizDao from "../db/dao/quiz.dao.js";
import tryCatchErr from "../middleware/tryCatchErr.js";
const quizDao = new QuizDao();
export const getAllQuizzes = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const quizes = await quizDao.getAllQuizes();

    res.json({ success: true, data: quizes });
  }
);
export const addNewQuiz = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const quize = await quizDao.createQuiz(req.body);
    res.json({ success: true, data: quize });
  }
);
export const deleteQuiz = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const id = req.params.id;
    const quize = await quizDao.deleteQuiz(id);
    res.json({ success: true, data: quize });
  }
);
export const editQuiz = tryCatchErr(
  /** @type {import("express").RequestHandler} */
  async (req, res) => {
    const id = req.params.id;
    const announcement = await quizDao.editQuiz(id, req.body);
    res.json({ success: true, data: announcement });
  }
);
