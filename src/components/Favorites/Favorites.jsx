// Favorites.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetFavoritesQuery } from "../../redux/sercives/favoriteApi";
import FavoriteCard from "./FavoriteCard"; // FavoriteCard komponentini import edin
import style from "./Favorites.module.scss";

function Favorites() {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth); // Access token yoxlayırıq

  // Favoritləri API-dən çəkmək
  const { data: favoriteData = [], isLoading, isError, refetch } = useGetFavoritesQuery(); // refetch funksiyasını buradan alırıq

  useEffect(() => {
    if (!accessToken) {
      navigate("/login"); // Token yoxdursa, login səhifəsinə yönləndiririk
    }
  }, [accessToken, navigate]);

  if (isLoading) return <p>Yüklənir...</p>;
  if (isError) return <p>Favoritləri yükləmək mümkün olmadı.</p>;

  return (
    <div className={style.favoritesContainer}>
      <h2>Sevimlilər</h2>
      <div className={style.favoritesList}>
        {favoriteData && favoriteData.length > 0 ? (
          favoriteData.map((card) => (
            <FavoriteCard 
              key={card.productId} 
              card={card}
              refetchFavorites={refetch} // refetch funksiyasını prop kimi göndəririk
            />
          ))
        ) : (
          <p>Heç bir favorit yoxdur</p> // Əgər favoritlər boşdursa, bu mesajı göstəririk
        )}
      </div>
    </div>
  );
}

export default Favorites;
