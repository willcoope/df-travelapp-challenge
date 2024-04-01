import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import FavouritesTitle from "../src/components/pages/Favourites/FavouritesTitle";

test('renders favourites title correctly', () => {
    render(
        <BrowserRouter>
        <FavouritesTitle />
        </BrowserRouter>
    );
    
    const h1Element = screen.getByRole('heading', { level: 1 });
    
    expect(h1Element).toHaveTextContent('Favourites');
    });