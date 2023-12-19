import Joi from "joi";

export const quizSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  courseName: Joi.string().min(3).required(),
  topicName: Joi.string().min(3).required(),
  questions: Joi.array().items(Joi.string().min(3)).min(1).required(),
  dueDate: Joi.date().required(),
});
