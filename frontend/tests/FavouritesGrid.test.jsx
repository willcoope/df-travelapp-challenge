import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FavouritesGrid from '../src/components/FavouritesGrid'

test('renders the favourites', () => {
    localStorage.setItem('favouriteLocations', JSON.stringify(['london', 'paris']))
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

