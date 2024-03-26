import Favourite from "./Favourite";
import "./FavouritesGrid.css";
import { useState } from "react";
import "../../Forecast.css";

const FavouritesGrid = () => {
  const [refresh, setRefresh] = useState(false);
  let user = localStorage.getItem("user");
  user = user ? JSON.parse(user) : {};
  let bookmarks = user.favourites || [];

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="favourites-grid white-outline">
      {bookmarks.map((bookmark, index) => (
        <Favourite key={index} name={toTitleCase(bookmark)} setRefresh={setRefresh} />
      ))}
    </div>
  );
};
export default FavouritesGrid;
