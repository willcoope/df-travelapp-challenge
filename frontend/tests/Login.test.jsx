import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import Login from "../src/components/pages/Login/Login";

test("renders the login component", () => {
    render(
        <BrowserRouter>
        <Login />
        </BrowserRouter>
    );
    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toHaveTextContent("Login");
});