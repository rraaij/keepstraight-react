import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("has hello world", () => {
    // Arrange
    render(<Greeting />);
    // Act
    // Assert
    const element = screen.getByText("Hello World");
    expect(element).toBeInTheDocument();
  });

  test("renders text when button was not clicked", () => {
    render(<Greeting />);
    const element1 = screen.getByText("Good to see you");
    expect(element1).toBeInTheDocument();
    const element2 = screen.queryByText("Changed", { exact: false });
    expect(element2).toBeNull();
  });

  test("renders text when button was clicked", () => {
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);
    const element1 = screen.getByText("Changed");
    expect(element1).toBeInTheDocument();
  });
});
