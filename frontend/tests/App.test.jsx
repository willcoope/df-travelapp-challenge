import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import App from "../src/App";

test("renders App component", () => {
  render(
      <App />
  );

  // Add your assertions here
  // For example, you can check if a certain page is rendered by default
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});