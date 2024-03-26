import "../../Forecast.css";

const CurrentForecast = (props) => {
  const icon_string =
    "../../assets/weather-icons/" + props.currentWeather.icon + ".svg";
  const formattedDate = new Date(props.currentWeather.date).toDateString();
  const weather_desc = props.currentWeather.weather_desc.replace(
    /\b\w/g,
    (char) => char.toUpperCase()
  );
  return (
    <div
      className="white-outline"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <h1>Todays Weather:</h1>
      <h4>{formattedDate}</h4>
      <img src={icon_string} alt={props.currentWeather.weather_desc} />
      <h2>{props.currentWeather.temp} ° C</h2>
      <h2>{weather_desc}</h2>
    </div>
  );
};
export default CurrentForecast;
