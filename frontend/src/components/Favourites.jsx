import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";

import FavouritesTitle from "./FavouritesTitle";
import FavouritesGrid from "./FavouritesGrid";

const Favourites = () => {
  return (
    <div>
      <Header />
      <Background />
      <FavouritesTitle />
      <FavouritesGrid />
      <Footer />
    </div>
  );
};
export default Favourites;
