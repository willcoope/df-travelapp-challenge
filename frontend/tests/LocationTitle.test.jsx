import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import LocationTitle from "../src/components/pages/Location/LocationTitle";

  test('renders location title correctly', () => {
    render(<LocationTitle location={"london"} />);

    const h1Element = screen.getByRole('heading', { level: 1 });
    const h2Element = screen.getByRole('heading', { level: 2 });
    
    expect(h2Element).toHaveTextContent('Telling You About');
    expect(h1Element).toHaveTextContent('London');
  });