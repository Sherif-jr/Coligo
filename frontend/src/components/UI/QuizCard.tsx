import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import { Button } from "@mui/material";
import { FC } from "react";
import Quiz from "../../interfaces/Quiz.interface";
import dateTime from "../../utils/dateTime";
const QuizCard: FC<{ quiz: Quiz }> = ({ quiz }) => {
  return (
    <div>
      <div className="flex gap-2">
        <HourglassTopTwoToneIcon color="primary" />
        <h6 className="font-bold">{quiz.title}</h6>
      </div>
      <div className="my-4">
        <p className="text-gray-500 text-sm">Course: {quiz.courseName}</p>
        <p className="text-gray-500 text-sm">Topic: {quiz.topicName}</p>
        <p className="text-gray-500 text-sm">
          Due to:
          {/* {new Date(quiz.dueDate).toLocaleDateString()} */}
          {dateTime(quiz.dueDate)}
        </p>
      </div>
      <Button variant="outlined">Start Quiz</Button>
    </div>
  );
};

export default QuizCard;
