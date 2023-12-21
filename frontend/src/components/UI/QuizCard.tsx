import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import { Button } from "@mui/material";
import { FC } from "react";
import Quiz from "../../interfaces/Quiz.interface";
import dateTime from "../../utils/dateTime";
import { useTranslation } from "react-i18next";
const QuizCard: FC<{ quiz: Quiz }> = ({ quiz }) => {
  const { t } = useTranslation();
  return (
    <div data-testid="quiz-card">
      <div className="flex gap-2">
        <HourglassTopTwoToneIcon color="primary" />
        <h6 className="font-bold" data-testid="quiz-title">
          {quiz.title}
        </h6>
      </div>
      <div className="my-4">
        <p className="text-gray-500 text-sm" data-testid="quiz-courseName">
          Course: {quiz.courseName}
        </p>
        <p className="text-gray-500 text-sm" data-testid="quiz-topicName">
          Topic: {quiz.topicName}
        </p>
        <p className="text-gray-500 text-sm" data-testid="quiz-dueDate">
          Due to: {dateTime(quiz.dueDate)}
        </p>
      </div>
      <Button variant="outlined">{t("startQuiz")}</Button>
    </div>
  );
};

export default QuizCard;
