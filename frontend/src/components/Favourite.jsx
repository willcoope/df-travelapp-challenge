import { useNavigate } from "react-router-dom";
import filledBookmark from "../images/filled_bookmark.png";

const Favourite = ({ name, setRefresh }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/location/${name.toLowerCase()}`);
  };
  const handleRemove = () => {
    let bookmarks = localStorage.getItem("favouriteLocations");
    bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const index = bookmarks.indexOf(name.toLowerCase());
    if (index !== -1) {
      bookmarks.splice(index, 1);
    }
    localStorage.setItem("favouriteLocations", JSON.stringify(bookmarks));
    setRefresh((prev) => !prev);
  };
  name = name[0].toUpperCase() + name.slice(1);
  name = name.replace(/%20(\w)/g, function (_, c) {
    return " " + c.toUpperCase();
  });
  return (
    <div className="favourite">
      <button onClick={handleRemove}>
        <img src={filledBookmark} alt="bookmark" />
      </button>
      <h4 onClick={handleClick}>{name}</h4>
    </div>
  );
};
export default Favourite;
