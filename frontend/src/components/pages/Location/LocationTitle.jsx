import "../../Forecast.css";

const LocationTitle = ({ location }) => {
  location = location[0].toUpperCase() + location.slice(1);
  location = location.replace(/%20(\w)/g, function (_, c) {
    return " " + c.toUpperCase();
  });
  return (
    <div className="d-flex flex-column justify-content-center align-items-center white-outline">
      <h2>Telling You About</h2>
      <h1>{location}</h1>
    </div>
  );
};

export default LocationTitle;
