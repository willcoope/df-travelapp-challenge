import Background from "../../Background";
import Footer from "../../Footer";
import Header from "../../Header";
import Bookmark from "./Bookmark";
import Weather from "./Weather";
import Map from "./Map";

import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Location = () => {
  const [refresh, setRefresh] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const locationUrl = useLocation().pathname.slice(10).toLowerCase();
  let user = localStorage.getItem("user");
  const loggedIn = (user !== null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${locationUrl}&appid=0e337c0616573de245aa60d9cfadcb49`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [locationUrl]);
  if (weatherData.length == 0) {
    return (
      <div>
        <Header />
        <Background />
        <h1
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "75vh", marginBottom: "60px" }}
        >
          City Not Found
        </h1>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Background />
      {loggedIn && <Bookmark name={locationUrl} setRefresh={setRefresh} />}
      <Weather weatherData={weatherData} />
      <Map long={weatherData.city.coord.lon} lat={weatherData.city.coord.lat}/>
      <Footer />
    </div>
  );
};

export default Location;
