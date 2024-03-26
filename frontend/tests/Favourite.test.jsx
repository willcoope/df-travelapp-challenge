import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Favourite from '../src/components/Favourite'

test('renders the favourite', () => {
    render(
        <BrowserRouter>
            <Favourite name="london" />
        </BrowserRouter>
    )
    const favourite = screen.getByText(/London/i)
    expect(favourite).toBeInTheDocument()
})

test('removes the location from local storage', () => {
    const mockSetRefresh = () => {}
    localStorage.setItem('favouriteLocations', JSON.stringify(['london']))
    render(
        <BrowserRouter>
            <Favourite name="london" setRefresh={mockSetRefresh}/>
        </BrowserRouter>
    )
    const button = screen.getByRole('button')
    button.click()
    const bookmarks = JSON.parse(localStorage.getItem('favouriteLocations'))
    expect(bookmarks).toHaveLength(0)
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
