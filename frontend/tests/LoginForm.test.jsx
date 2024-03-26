import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import LoginForm from '../src/components/pages/Login/LoginForm';
import authService from '../src/services/auth.service';
vi.mock("../src/services/auth.service", () => ({
    default: {
      login: vi.fn(),
    },
  }));



test('renders the login form', () => {
    render(
        <BrowserRouter>
            <LoginForm />
        </BrowserRouter>
    )
    const login = screen.getByRole('button');
    expect(login).toBeInTheDocument();
});

test('should call the login function with the inputted data when the button is clicked', async () => {
    authService.login.mockResolvedValue({
        user: {
            _id: "1",
            username: "test",
            password: "password",
            favourites: [],
        },
    });
    render(
        <BrowserRouter>
            <LoginForm />
        </BrowserRouter>
    );
    const username = screen.getByPlaceholderText(/username.../i);
    const password = screen.getByPlaceholderText(/password.../i);
    await userEvent.type(username, 'test');
    await userEvent.type(password, 'password');
    const login = screen.getByRole('button');
    await userEvent.click(login);
    expect(authService.login).toHaveBeenCalledWith('test', 'password');
});

