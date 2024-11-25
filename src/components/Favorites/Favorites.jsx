import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetFavoritesQuery, useRemoveFavoriteMutation } from "../../redux/sercives/favoriteApi";
import FavoriteCard from "./FavoriteCard"; // FavoriteCard komponentini import edin
import style from "./Favorites.module.scss";

function Favorites() {
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth); // Access token yoxlayırıq
  const { data: favoriteData = [], isLoading, isError, refetch } = useGetFavoritesQuery(); // Refetch əlavə edildi

  useEffect(() => {
    if (!accessToken) navigate("/login"); // Token yoxdursa, login səhifəsinə yönləndiririk
  }, [accessToken, navigate]);

  if (isLoading) return <p>Yüklənir...</p>;
  if (isError) return <p>Favoritləri yükləmək mümkün olmadı.</p>;

  return (
    <div
      className={`${style.favoritesContainer} ${
        favoriteData.length === 0 ? style.empty : ""
      }`}
    >
      <h2>Sevimlilər</h2>
      <div className={style.favoritesList}>
        {favoriteData.length > 0 ? (
          favoriteData.map((card) => (
            <FavoriteCard
              key={card.id}
              card={card}
              onRefetch={refetch} // Sinxronizasiya üçün refetch funksiyasını ötürürük
            />
          ))
        ) : (
          <p>Heç bir favorit yoxdur</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;