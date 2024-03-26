import "../../Forecast.css";

const Forecast = (props) => {
  const icon_string =
    "../../assets/weather-icons/" + props.weather.icon + ".svg";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(props.weather.date);
  const dayName = days[date.getDay()];
  const weather_desc = props.weather.weather_desc.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
  return (
    <div className="forecast white-outline">
      <h4>{dayName}</h4>
      <img src={icon_string} alt={props.weather.weather_desc} />
      <h4>{props.weather.temp} ° C</h4>
      <h4>{weather_desc}</h4>
    </div>
  );
};
export default Forecast;
