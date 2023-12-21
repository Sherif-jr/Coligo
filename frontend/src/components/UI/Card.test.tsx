import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "./Card";

describe("Card Component", () => {
  it("should render the card", () => {
    render(<Card />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
  it("should render the loading elements", () => {
    render(<Card loading />);
    expect(screen.getByTestId("card-loading")).toBeInTheDocument();
    expect(screen.getByTestId("card-loading-icon")).toBeInTheDocument();
  });
});
