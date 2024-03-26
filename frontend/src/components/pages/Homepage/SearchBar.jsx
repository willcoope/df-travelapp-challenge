import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/location/${location.toLowerCase()}`);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "60vh", marginBottom: "60px" }}
    >
      <h1
        style={{
          textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
        }}
      >
        Tell Me About
      </h1>
      <input
        type="text"
        name="location"
        placeholder="Search..."
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};
export default SearchBar;
