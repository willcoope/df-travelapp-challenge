import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Favourite from '../src/components/pages/Favourites/Favourite'
import authService from '../src/services/auth.service'
import { test } from 'vitest'

vi.mock("../src/services/auth.service", () => ({
    default: {
      removeFavourite: vi.fn(),
    },
  }));

test('renders the favourite', () => {
    render(
        <BrowserRouter>
            <Favourite name="london" />
        </BrowserRouter>
    )
    const favourite = screen.getByText(/London/i)
    expect(favourite).toBeInTheDocument()
})

test('navigates to the location page', () => {
    const mockSetRefresh = () => {}
    render(
        <BrowserRouter>
            <Favourite name="london" setRefresh={mockSetRefresh}/>
        </BrowserRouter>
    )
    const link = screen.getByText(/London/i)
    link.click()
    expect(window.location.pathname).toBe('/location/london')
})

test('should call the removeFavourite function when the button is clicked', async () => {
    const userItem = {
        _id: "1",
        username: "test",
        password: "password",
        favourites: ["london"],
    };
    localStorage.setItem("user", JSON.stringify(userItem));
    authService.removeFavourite.mockResolvedValue({
        _id: "1",
        username: "test",
        password: "password",
        favourites: [],
    });
    render(
        <BrowserRouter>
            <Favourite name="london" setRefresh={vi.fn()} />
        </BrowserRouter>
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(authService.removeFavourite).toHaveBeenCalledWith(
        userItem.username,
        userItem.password,
        "london"
    );
});
