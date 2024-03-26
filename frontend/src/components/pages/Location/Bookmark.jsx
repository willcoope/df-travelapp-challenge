import PropTypes from "prop-types";
import emptyBookmark from "../../../images/empty_bookmark.png";
import filledBookmark from "../../../images/filled_bookmark.png"
import { useState, useEffect } from "react";
import "../../Forecast.css";
import authService from "../../../services/auth.service";

const Bookmark = ({ name, setRefresh }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isBookmarked, setIsBookmarked] = user ?
  useState(user.favourites.includes(name.toLowerCase())) : useState(false);
  name = name[0].toUpperCase() + name.slice(1);
  name = name.replace(/%20(\w)/g, function (_, c) {
    return " " + c.toUpperCase();
  });
  const addFavourite = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await authService.addFavourite(
        user.username,
        user.password,
        name.toLowerCase()
      );
      console.log(response);
      user.favourites = response.favourites;
      localStorage.setItem("user", JSON.stringify(user));
      setIsBookmarked(true);
      setRefresh((prev) => !prev);
    }
    catch (error) {
      console.log(error);
    }
  };
  const removeFavourite = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await authService.removeFavourite(
        user.username,
        user.password,
        name.toLowerCase()
      );
      console.log(response);
      user.favourites = response.favourites;
      localStorage.setItem("user", JSON.stringify(user));
      setIsBookmarked(false);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
  }
};
  const toggleFavourite = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    isBookmarked ? removeFavourite() : addFavourite();
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    let bookmarks = user.favourites;
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
        onClick={toggleFavourite}
      >
        <img
          src={isBookmarked ? filledBookmark : emptyBookmark}
          alt="bookmark"
        />
      </button>
      <h3>Click to toggle Favourite status</h3>
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
