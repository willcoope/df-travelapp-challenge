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

test('doesn\'t render the favourites link when not logged in', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const favourites = screen.queryByText(/favourites/i)
    expect(favourites).not.toBeInTheDocument()
})

test(`renders the login link when not logged in`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const login = screen.getByText(/login/i)
    expect(login).toBeInTheDocument()
})

test(`login link navigates to the login page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const login = screen.getByText(/login/i)
    login.click()
    expect(window.location.pathname).toBe('/login')
})

test(`renders the signup link when not logged in`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const signup = screen.getByText(/sign up/i)
    expect(signup).toBeInTheDocument()
})

test(`signup link navigates to the signup page`, () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const signup = screen.getByText(/sign up/i)
    signup.click()
    expect(window.location.pathname).toBe('/signup')
})

test('renders the favourites link when logged in', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'test' }))
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const favourites = screen.getByText(/favourites/i)
    expect(favourites).toBeInTheDocument()
})

test('renders the logout link when logged in', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'test' }))
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logout = screen.getByText(/log out/i)
    expect(logout).toBeInTheDocument()
})

test('logout link logs out the user', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'test' }))
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const logout = screen.getByText(/log out/i)
    logout.click()
    expect(localStorage.getItem('user')).toBe(null)
})

test('clicking favourites then view all navigates to the favourites page', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'test' }))
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const favourites = screen.getByText(/favourites/i)
    favourites.click()
    const viewAll = screen.getByText(/view all/i)
    viewAll.click()
    expect(window.location.pathname).toBe('/favourites')
})

test('clicking favourites renders a dropdown containing the user\'s favourite locations', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'test', favourites: ['test'] }))
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const favourites = screen.getByText(/favourites/i)
    favourites.click()
    const location = screen.getByText(/test/i)
    expect(location).toBeInTheDocument()
})