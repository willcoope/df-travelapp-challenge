import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import Favourites from "../src/components/pages/Favourites/Favourites";

test("renders the favourites component", () => {
    render(
        <BrowserRouter>
        <Favourites />
        </BrowserRouter>
    );
    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toHaveTextContent("Favourites");
});