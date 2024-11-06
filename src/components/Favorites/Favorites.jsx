// Favorites.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetFavoritesQuery } from "../../redux/sercives/productApi";
// import FavoriteCard from "./FavoriteCard";
import style from "./Favorites.module.scss";

function Favorites() {
  const dispatch = useDispatch();
  const { data: favoriteData = [], isLoading, isError } = useGetFavoritesQuery();

  useEffect(() => {
    if (favoriteData.length) {
      // dispatch(setFavorites(favoriteData)); // Serverdən gələn favoritləri slice-ə əlavə edir
    }
  }, [favoriteData, dispatch]);

  if (isLoading) return <p>Yüklənir...</p>;
  if (isError) return <p>Favoritləri yükləmək mümkün olmadı.</p>;

  return (
    <div className={style.favoritesContainer}>
      <h2>Sevimlilər</h2>
      <div>
        {/* {favorites.map((favoriteItem) => (
          <FavoriteCard key={favoriteItem.id} card={favoriteItem} />
        ))} */}
      </div>
    </div>
  );
}

export default Favorites;
