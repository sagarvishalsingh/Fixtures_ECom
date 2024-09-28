import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/MiniComponents/SectionTitle";
import ForYouProducts from "../WishList/ForYouProducts";
import s from "./FavoritePage.module.scss";
import FavoriteProducts from "./FavoriteProducts";

const FavoritePage = () => {
  const { favoritesProducts } = useSelector((state) => state.products);
  const lengthOfFavorites = favoritesProducts.length;

  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>

      <div className="container">
        <main className={s.favoritePage} id="favorite-page">
          <section className={s.favoritePageContent}>
            <header>
              <label htmlFor="wishlist">Favorite ({lengthOfFavorites})</label>

              <button type="button">Move All To Bag</button>
            </header>

            <FavoriteProducts />
          </section>

          <section className={s.forYou}>
            <header>
              <SectionTitle eventName="Just For You" type={2} />

              <Link to="/products">See All</Link>
            </header>

            <ForYouProducts />
          </section>
        </main>
      </div>
    </>
  );
};
export default FavoritePage;
