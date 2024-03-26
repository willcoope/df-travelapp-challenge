import { render, screen } from '@testing-library/react'
// import CurrentForecast from '../src/components/CurrentForecast'
import CurrentForecast from '../src/components/pages/Location/CurrentForecast';
test('renders the current forecast', () => {
    const currentWeather = {
        date: '2021-08-12 12:00:00',
        temp: 80,
        weather_desc: 'clear sky',
        icon: '01d'
    }
    render(<CurrentForecast currentWeather={currentWeather} />)
    const temp = screen.getByText(/80 ° C/i)
    const description = screen.getByText(/clear sky/i)
    const icon = screen.getByAltText(/clear sky/i);
    expect(temp).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(icon).toBeInTheDocument();
    expect(icon.src).toContain('01d');
})