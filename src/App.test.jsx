import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

test("prevents adding a book when required fields are empty", () => {
  render(<App />);

  fireEvent.click(
    screen.getByRole("button", { name: "Add Book" })
  );

  expect(screen.getByLabelText("Book title"))
  .toHaveAccessibleDescription("Please enter a book title.");

expect(screen.getByLabelText("Author"))
  .toHaveAccessibleDescription("Please enter an author.");

  expect(screen.getByText("Total books: 8")).toBeInTheDocument();
});

test("filters the collection by reading status", () => {
  render(<App />);

  fireEvent.click(
    screen.getAllByRole("button", { name: "Mark as Read" })[0]
  );

  fireEvent.change(
    screen.getByLabelText("Filter by reading status:"),
    { target: { value: "read" } }
  );

  expect(screen.getByText("Robot Garden")).toBeInTheDocument();
  expect(screen.queryByText("River Sketches")).not.toBeInTheDocument();
  expect(screen.getByText("Showing 1 books")).toBeInTheDocument();
});
