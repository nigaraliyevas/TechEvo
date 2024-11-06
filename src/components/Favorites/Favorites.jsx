import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import style from "./Favorites.module.scss"; // SCSS faylını import etməyi unutmayın

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={style.favoritesContainer}>
      <h2>Sevimlilər</h2>
      <div>
        {favorites.map((favoriteItem) => (
          <FavoriteCard key={favoriteItem.id} card={favoriteItem} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
