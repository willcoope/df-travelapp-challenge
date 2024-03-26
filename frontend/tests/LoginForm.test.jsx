import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from '../src/components/pages/Login/LoginForm';

test('renders the login form', () => {
    render(
        <BrowserRouter>
            <LoginForm />
        </BrowserRouter>
    )
    const login = screen.getByRole('button');
    expect(login).toBeInTheDocument();
});

