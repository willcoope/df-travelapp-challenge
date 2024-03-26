import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FavouritesGrid from '../src/components/pages/Favourites/FavouritesGrid';

test('renders the favourites', () => {
    localStorage.setItem('user', JSON.stringify({"_id": "1", "username": "test", "password":"password", "favourites": ["london", "paris"]}));
    render(
        <BrowserRouter>
            <FavouritesGrid />
        </BrowserRouter>
    )
    const london = screen.getByText(/London/i)
    const paris = screen.getByText(/Paris/i)
    expect(london).toBeInTheDocument()
    expect(paris).toBeInTheDocument()
})

