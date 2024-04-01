import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Weather from "../src/components/pages/Location/Weather";
import dummyWeatherData from '../data/dummyWeatherData.json';

test("renders the weather component", () => {
    render(
        <Weather weatherData={dummyWeatherData.dublin} />
    );
    const todayWeather = screen.getByText(/todays weather/i);
    expect(todayWeather).toBeInTheDocument();
    });