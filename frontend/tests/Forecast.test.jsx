import { render, screen } from '@testing-library/react'
import Forecast from '../src/components/Forecast'
import { test } from 'vitest'

test('renders the forecast', () => {
    // const weather = {
    //     dt_txt: '2021-08-12 12:00:00',
    //     main: {
    //         temp: 80
    //     },
    //     weather: [
    //         {
    //             icon: '01d',
    //             description: 'clear sky'
    //         }
    //     ]
    // }
    const weather = {
        date: '2021-08-12 12:00:00',
        temp: 80,
        weather_desc: 'clear sky',
        icon: '01d'
    }
    render(<Forecast weather={weather} />)
    const temp = screen.getByText(/80 ° C/i)
    const description = screen.getByText(/clear sky/i)
    const icon = screen.getByAltText(/clear sky/i);
    expect(temp).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(icon).toBeInTheDocument();
    expect(icon.src).toContain('01d');
})