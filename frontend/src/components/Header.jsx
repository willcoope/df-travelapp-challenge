import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const currentLocation = useLocation();

  const handleSubmit = () => {
    navigate(`/location/${location.toLowerCase()}`);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const hasFavourites = localStorage.getItem("favouriteLocations") != "[]";
  let bookmarks = localStorage.getItem("favouriteLocations");
  bookmarks = bookmarks ? JSON.parse(bookmarks) : [];

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <nav
      className={`navbar top navbar-expand-lg navbar-light bg-light ${
        isOpen ? "show" : ""
      }`}
      style={{ backgroundColor: "white" }}
    >
      <button
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </button>
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <button className="nav-link" onClick={() => navigate("/")}>
              Home
            </button>
          </li>
          {hasFavourites && (
            <li className="nav-item dropdown">
              <button className="nav-link">Favourites</button>
              <div className="dropdown-content">
                {bookmarks.map(
                  (bookmark, index) => (
                    (bookmark = toTitleCase(bookmark)),
                    (
                      <h6
                        key={index}
                        onClick={() =>
                          navigate(`/location/${bookmark.toLowerCase()}`)
                        }
                      >
                        {bookmark}
                      </h6>
                    )
                  )
                )}
                <h6 onClick={() => navigate("/favourites")}>View All</h6>
              </div>
            </li>
          )}
        </ul>
        {currentLocation.pathname !== "/" && (
        <div className="search-input">
          <input
            type="text"
            name="location"
            placeholder="Search..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Header;
