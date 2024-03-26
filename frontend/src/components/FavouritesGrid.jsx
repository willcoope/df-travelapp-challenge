import Favourite from "./Favourite";
import "./FavouritesGrid.css";
import { useState } from "react";
import "./Forecast.css";

const FavouritesGrid = () => {
  const [refresh, setRefresh] = useState(false);
  let bookmarks = localStorage.getItem("favouriteLocations");
  bookmarks = bookmarks ? JSON.parse(bookmarks) : [];

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <div className="favourites-grid white-outline">
      {bookmarks.map((bookmark, index) => (
        <Favourite name={toTitleCase(bookmark)} setRefresh={setRefresh} />
      ))}
    </div>
  );
};
export default FavouritesGrid;
