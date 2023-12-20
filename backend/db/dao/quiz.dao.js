import quizModel from "../models/quiz.model.js";

export default class QuizDao {
  /**
   *
   * @param {{title:string, courseName: string,topicName: string,questions: string[],dueDate: Date}} quiz
   */
  async createQuiz(quiz) {
    return await quizModel.create(quiz);
  }
  async getAllQuizes() {
    return await quizModel.find({});
  }
  /**
   *
   * @param {string} id
   * @param {{title:string, courseName: string,topicName: string,questions: string[],dueDate: Date}} quiz
   */
  async editQuiz(id, quiz) {
    return await quizModel.findByIdAndUpdate(id, quiz, { new: true });
  }
  /**
   * @param {string} id
   */
  async deleteQuiz(id) {
    return await quizModel.findByIdAndDelete(id);
  }
  /**
   * @param {string} id
   */
  async getQuizById(id) {
    return await quizModel.findById(id);
  }
}
