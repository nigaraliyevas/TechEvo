import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PiHeartBold } from "react-icons/pi";
import { TiHeartFullOutline } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import StarRating from "../../../../../components/Rating/StarRating";
import { addToCart } from "../../../../../redux/slices/BasketSlice";
import style from "../../HomePage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAddFavoriteMutation, useRemoveFavoriteMutation, useGetFavoritesQuery } from "../../../../../redux/sercives/favoriteApi";

function Card({ card }) {
  const { name, price, imageUrl, rating, id, discountPrice } = card;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some(fav => fav.id === id));
  }, [id]);

  const handleFavoriteToggle = async event => {
    event.stopPropagation();
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
      return;
    }

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = JSON.parse(localStorage.getItem("favorites")).filter(fav => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      await removeFavorite(id).unwrap();
    } else {
      // Add to favorites
      const updatedFavorites = [...JSON.parse(localStorage.getItem("favorites") || "[]"), card];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      await addFavorite({ productId: id }).unwrap();
    }
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(null);

  const handleMouseMove = e => {
    const { clientX } = e;

    if (lastMouseX === null) {
      setLastMouseX(clientX);
      return;
    }

    const deltaX = clientX - lastMouseX;

    if (Math.abs(deltaX) > 50) {
      const newIndex = deltaX < 0 ? (selectedImage - 1 + imageUrl.length) % imageUrl.length : (selectedImage + 1) % imageUrl.length;

      setSelectedImage(newIndex);
      setLastMouseX(clientX);
    }
  };

  const handleDivClick = index => {
    setSelectedImage(index);
  };

  const addBasket = () => {
    dispatch(addToCart(card));
  };
  return (
    <div style={{ textDecoration: "none" }} className={style.card}>
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
                <img key={index} className={style.cardImg} src={imgSrc} alt={name} style={{ width: `${100 / imageUrl.length}%` }} />
              ))}
            </Link>
          </div>
        </div>

        <div className={style.radioButtons}>
          {imageUrl.map((_, index) => (
            <div
              key={index}
              className={`${style.radioDiv} ${selectedImage === index ? style.selected : ""}`}
              onClick={() => handleDivClick(index)} // Siçan üçün klik
            />
          ))}
        </div>

        <div className={style.heartSpan} onClick={handleFavoriteToggle}>
          {isFavorite ? <TiHeartFullOutline style={{ color: "red" }} /> : <PiHeartBold style={{ fill: "red" }} />}
        </div>

        <div className={style.cardBottomTitles}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>
              {discountPrice ? (
                <>
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginRight: "10px",
                      color: "#BFBFBF",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {price} AZN
                  </span>
                  <span>{discountPrice} AZN</span>
                </>
              ) : (
                <span>{price} AZN</span>
              )}
            </p>
          </div>

          <div className={style.ratingBasket}>
            <StarRating value={rating} />

            <div className={style.basketBg}>
              <button onClick={addBasket}>
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
