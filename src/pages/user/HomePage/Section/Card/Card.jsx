import React, { useState } from "react";
import { PiHeartBold } from "react-icons/pi";
import { TiHeartFullOutline } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import StarRating from "../../../../../components/Rating/StarRating";
import style from "../../HomePage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddFavoriteMutation, useRemoveFavoriteMutation, useGetFavoritesQuery } from "../../../../../redux/sercives/favoriteApi";



function Card({ card }) {
  const { name, price, imageUrl, rating, id } = card;
  const navigate = useNavigate();

  // API-dən favoritləri alırıq
  const { data: favoriteData = [], isLoading, isError, refetch } = useGetFavoritesQuery();
  const accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken")
    : null;


  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  // API-dən alınan favoritlərdən isFavorite təyin edirik
  const isFavorite = favoriteData.some((fav) => fav.id === id); // Favoritdə olub-olmadığını yoxlayırıq

  const [selectedImage, setSelectedImage] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(null);
  const [isFavorited, setIsFavorite] = useState(false);

  const handleToggleFavorite = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!accessToken) {
      navigate("/login"); // Token yoxdursa, login səhifəsinə yönləndir
      return;
    }

    try {
      if (isFavorite) {
        setIsFavorite(false);
        await removeFavorite(id).unwrap(); // API-dən favoriti sil
      } else {
        setIsFavorite(true);
        await addFavorite(id).unwrap(); // API-yə favoriti əlavə et
      }

      refetch();
    } catch (error) {
      console.error("Favorit əməliyyatı zamanı xəta baş verdi:", error);
    }
  };

  const handleMouseMove = (e) => {
    const { clientX } = e;

    if (lastMouseX === null) {
      setLastMouseX(clientX);
      return;
    }

    const deltaX = clientX - lastMouseX;

    if (Math.abs(deltaX) > 50) {
      const newIndex =
        deltaX < 0
          ? (selectedImage - 1 + imageUrl.length) % imageUrl.length
          : (selectedImage + 1) % imageUrl.length;

      setSelectedImage(newIndex);
      setLastMouseX(clientX);
    }
  };

  const handleDivClick = (index) => {
    setSelectedImage(index);
  };

  ///Basket-e elave etmek
  // const {basket} = useSelector((state)=>state.basket)
  const addbasket = () => {
    dispatch(addToCart(card));
  };
  return (
    <div
      style={{ textDecoration: "none" }}
      className={style.card}
    >
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>

      <div style={{ position: "relative" }}>
        <div
          className={style.cardImgContainer}
          onMouseMove={handleMouseMove} // Siçan hərəkəti üçün
          style={{ overflow: "hidden" }}
        >
          <div
            className={style.imageSlider}
            style={{
              transform: `translateX(-${selectedImage * 25}%)`,
              width: `${imageUrl.length * 100}%`,
              height: "100%",
            }}
          >
            <Link to={`/product?id=${id}`}>
              {imageUrl.map((imgSrc, index) => (
                <img
                  key={index}
                  className={style.cardImg}
                  src={imgSrc}
                  alt={name}
                  style={{ width: `${100 / imageUrl.length}%` }}
                />
              ))}
            </Link>
          </div>
        </div>

        <div className={style.radioButtons}>
          {imageUrl.map((_, index) => (
            <div
              key={index}
              className={`${style.radioDiv} ${selectedImage === index ? style.selected : ""
                }`}
              onClick={() => handleDivClick(index)} // Siçan üçün klik
            />
          ))}
        </div>

        <div className={style.heartSpan} onClick={handleToggleFavorite}>
          {isFavorited ? (
            <TiHeartFullOutline style={{ color: "red" }} />
          ) : (
            <PiHeartBold style={{ fill: "red" }} />
          )}
        </div>

        <div className={style.cardBottomTitles}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>{price} AZN</p>
          </div>

          <div className={style.ratingBasket}>
            <StarRating value={rating} />

            <div className={style.basketBg}>
              <button>
                <SlBasket style={{ width: "18px", height: "18px" }} />
              </button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
