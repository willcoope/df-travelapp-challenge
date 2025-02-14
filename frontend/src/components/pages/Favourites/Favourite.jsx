import { useNavigate } from "react-router-dom";
import filledBookmark from "../../../images/filled_bookmark.png";
import authService from "../../../services/auth.service";
import "./Favourite.css";
const Favourite = ({ name, setRefresh }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/location/${name.toLowerCase()}`);
  };
  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await authService.removeFavourite(
        user.username,
        user.password,
        name.toLowerCase()
      );
      user.favourites = response.favourites;
      localStorage.setItem("user", JSON.stringify(user));
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  name = name[0].toUpperCase() + name.slice(1);
  name = name.replace(/%20(\w)/g, function (_, c) {
    return " " + c.toUpperCase();
  });
  return (
    <div className="favourite">
      <h4 onClick={handleClick}>{name}</h4>
      <div className="button-container">
        <button onClick={handleRemove}>
          Remove
          {/* <img src={filledBookmark} alt="bookmark" /> */}
        </button>
        <button onClick={handleClick}>
          View
          {/* <img src={filledBookmark} alt="bookmark" /> */}
        </button>
      </div>
    </div>
  );
};
export default Favourite;
