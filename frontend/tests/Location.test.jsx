import { render, screen } from '@testing-library/react';
import Location from '../src/components/Location';
import { BrowserRouter } from 'react-router-dom';
import { test } from 'vitest';

test('renders "City not found" when no cityData is provided', () => {
    render(
    <BrowserRouter>
    <Location cityData={null} />
    </BrowserRouter>);

    const messageElement = screen.getByText(/City not found/i);
    expect(messageElement).toBeInTheDocument();
});