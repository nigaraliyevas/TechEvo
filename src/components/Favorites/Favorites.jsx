import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h2 style={{color:"white", fontSize:"24px", paddingBottom:"28px"}}>Sevimlilər</h2>
      <div>
        {favorites.map((favoriteItem) => (
          <FavoriteCard key={favoriteItem.id} card={favoriteItem} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
