import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../src/components/Header'

test(`renders the header`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()
})

test(`logo navigates to the home page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logo = screen.getByAltText(/logo/i)
    logo.click()
    expect(window.location.pathname).toBe('/')
})

test(`renders the home link`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const home = screen.getByText(/home/i)
    expect(home).toBeInTheDocument()
})

test(`home link navigates to the home page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const home = screen.getByText(/home/i)
    home.click()
    expect(window.location.pathname).toBe('/')
})