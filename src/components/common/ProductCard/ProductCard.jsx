import React, { useState, useEffect } from "react";
import { PiHeartBold } from "react-icons/pi";
import { TiHeartFullOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from "../../../redux/sercives/favoriteApi";
import { addToCart } from "../../../redux/slices/BasketSlice";
import StarRating from "../../../components/Rating/StarRating";
//import style from "../../HomePage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import toast from "react-hot-toast";
import style from "./ProductCard.module.scss";

const ProductCard = ({ data, favoriteProductIds, refetchFavorites }) => {
  const { name, price, discountPrice, imageUrl, rating, id } = data;
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isFavorite = favoriteProductIds.includes(id);

  const handleToggleFavorite = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    const token = localStorage.getItem("accessToken");

    if (!token) {
      console.log("Token tapılmadı. Login səhifəsinə yönləndiriləcək...");
      toast.error("Daxil olunmamısınız. Zəhmət olmasa, giriş edin.");
      navigate("/login");
      return;
    }

    try {
      if (isFavorite) {
        await removeFavorite(id).unwrap();
        toast.success("Favoritlərdən silindi!");
      } else {
        await addFavorite(id).unwrap();
        toast.success("Favoritlərə əlavə olundu!");
      }
      refetchFavorites();
    } catch (error) {
      console.error("Favorit əməliyyatı zamanı xəta:", error);
      toast.error("Favorit əməliyyatı uğursuz oldu.");
    }
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(null);
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
  const addBasket = () => {
    dispatch(addToCart(data));
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
          onMouseMove={handleMouseMove}
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
              onClick={() => handleDivClick(index)}
            />
          ))}
        </div>

        <div className={style.heartSpan} onClick={handleToggleFavorite}>
          {isFavorite ? (
            <TiHeartFullOutline style={{ color: "white" }} />
          ) : (
            <PiHeartBold style={{ fill: "white" }} />
          )}
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
                      fontSize: "16px"
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
            <div className={style.ratingContainer}>
            <StarRating width= "100%" fontSize="1.4em" value={rating}  />
            </div>
              
            <div className={style.basketBg}>
              <button onClick={addBasket}>
                <SlBasket style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;