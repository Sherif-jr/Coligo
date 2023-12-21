import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import AnnouncementCard from "./AnnouncementCard";

describe("AnnouncementCard", () => {
  beforeEach(() => {
    render(
      <AnnouncementCard
        announcement={{ by: "Abdelrhman", subject: "Exams", content: "Lorem" }}
      />
    );
  });
  it("should display the announcement card", () => {
    screen.debug();
    expect(screen.queryByTestId("announcement-card")).toBeInTheDocument();
  });
  it("should display the announcement card details", () => {
    expect(screen.getByTestId("an-by")).toHaveTextContent("Abdelrhman");
    expect(screen.getByTestId("an-subject")).toHaveTextContent("Exams");
    expect(screen.getByTestId("an-content")).toHaveTextContent("Lorem");
  });
});
