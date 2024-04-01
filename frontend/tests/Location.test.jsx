import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import Location from "../src/components/pages/Location/Location";


test("renders City Not Found when no location is provided", () => {
  render(
    <BrowserRouter>
      <Location />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/City Not Found/i);
  expect(linkElement).toBeInTheDocument();
});


