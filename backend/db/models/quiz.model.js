import { Schema, model } from "mongoose";
const quizSchema = new Schema(
  {
    title: { type: String, required: true },
    courseName: { type: String, required: true },
    topicName: { type: String, required: true },
    questions: { type: [String], required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const quizModel = model("Quiz", quizSchema);
export default quizModel;
