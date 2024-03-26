import Forecast from "./Forecast";
import "./ForecastGrid.css";

const ForecastGrid = (props) => {
  return (
    <div className="forecast-grid">
      <Forecast weather={props.weatherGrid[0]} />
      <Forecast weather={props.weatherGrid[1]} />
      <Forecast weather={props.weatherGrid[2]} />
      <Forecast weather={props.weatherGrid[3]} />
    </div>
  );
};
export default ForecastGrid;
