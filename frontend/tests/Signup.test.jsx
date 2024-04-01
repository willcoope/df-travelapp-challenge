import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import Signup from "../src/components/pages/Signup/Signup";

test("renders the signup component", () => {
    render(
        <BrowserRouter>
        <Signup />
        </BrowserRouter>
    );
    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toHaveTextContent("Sign Up");
});