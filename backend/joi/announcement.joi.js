import Joi from "joi";

export const announcementSchema = Joi.object({
  subject: Joi.string().min(3).max(30).required(),
  content: Joi.string().min(3).required(),
  by: Joi.string().min(3).required(),
});
