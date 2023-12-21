import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import QuizCard from "./QuizCard";

describe("QuizCard", () => {
  beforeEach(() => {
    render(
      <QuizCard
        quiz={{
          title: "Hello",
          courseName: "math",
          topicName: "multiply",
          questions: [""],
          dueDate: "2023-12-20",
        }}
      />
    );
  });
  it("should render the quiz card", () => {
    expect(screen.queryByTestId("quiz-card")).toBeInTheDocument();
  });
  it("should display quiz details", () => {
    expect(screen.getByTestId("quiz-title")).toHaveTextContent("Hello");
    expect(screen.getByTestId("quiz-courseName")).toHaveTextContent(
      "Course: math"
    );
    expect(screen.getByTestId("quiz-topicName")).toHaveTextContent(
      "Topic: multiply"
    );
    expect(screen.getByTestId("quiz-dueDate")).toHaveTextContent(
      "Due to: 12/20/2023 - 2:00 AM"
    );
  });
});
