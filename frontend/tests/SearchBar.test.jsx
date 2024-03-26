import { render, screen } from '@testing-library/react'
import SearchBar from '../src/components/SearchBar';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/dom';

test('renders the search bar', () => {
    render(<BrowserRouter>
        <SearchBar />
    </BrowserRouter>)
    const input = screen.getByPlaceholderText(/search.../i)
    const button = screen.getByRole('button');
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})

test('updates the input value', () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    )
    const input = screen.getByPlaceholderText(/search.../i)
    expect(input.value).toBe('');
    input.value = 'London';
    expect(input.value).toBe('London');
})

test('navigates to the location page', () => {
    render(
        <BrowserRouter>
            <SearchBar/>
        </BrowserRouter>
    )
    const input = screen.getByPlaceholderText(/Search.../i)
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'London' } });
    button.click();
    expect(window.location.pathname).toBe('/location/london')
})