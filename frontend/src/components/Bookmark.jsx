import PropTypes from "prop-types";
import emptyBookmark from "../images/empty_bookmark.png";
import filledBookmark from "../images/filled_bookmark.png";
import { useState, useEffect } from "react";
import "./Forecast.css";

const Bookmark = ({ name }) => {
  const [isBookmarked, setIsBookmarked] = localStorage.getItem(
    "favouriteLocations"
  )
    ? useState(
        JSON.parse(localStorage.getItem("favouriteLocations")).includes(
          name.toLowerCase()
        )
      )
    : useState(false);
  name = name[0].toUpperCase() + name.slice(1);
  name = name.replace(/%20(\w)/g, function (_, c) {
    return " " + c.toUpperCase();
  });
  const saveToLocalStorage = () => {
    let bookmarks = localStorage.getItem("favouriteLocations");
    bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const lowerCaseName = name.toLowerCase();
    if (!bookmarks.includes(lowerCaseName.replace(/\s/g, '%20'))) {
      bookmarks.push(lowerCaseName);
      localStorage.setItem("favouriteLocations", JSON.stringify(bookmarks));
    }
    setIsBookmarked(true);
  };
  useEffect(() => {
    let bookmarks = localStorage.getItem("favouriteLocations");
    bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const lowerCaseName = name.toLowerCase();
    setIsBookmarked(bookmarks.includes(lowerCaseName));
  }, [name]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center white-outline">
      <h1>Telling You About</h1>
      <h2>{name}</h2>
      <button
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
        onClick={saveToLocalStorage}
      >
        <img
          src={isBookmarked ? filledBookmark : emptyBookmark}
          alt="bookmark"
        />
      </button>
      <h3>Click to add to Favourites</h3>
    </div>
  );
};

Bookmark.propTypes = {
  name: PropTypes.string.isRequired,
};

Bookmark.defaultProps = {
  name: "defaultProp PlaceName",
};

export default Bookmark;
