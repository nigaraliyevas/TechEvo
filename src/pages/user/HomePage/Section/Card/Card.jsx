import React, { useState } from "react";
import { PiHeartBold } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import StarRating from "../../../../../components/Rating/StarRating";
import style from "../../HomePage.module.scss";
import { Link } from "react-router-dom";

function Card({ card, onAddToFavorite }) {
  const { name, price, imageUrl, rating, id } = card;

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

  return (
    <div className={style.cardContainer}>
      <Link style={{ textDecoration: "none" }} to={`/product?id=${id}`} className={style.card}>
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
              {imageUrl.map((imgSrc, index) => (
                <img
                  key={index}
                  className={style.cardImg}
                  src={imgSrc}
                  alt={name}
                  style={{ width: `${100 / imageUrl.length}%` }}
                />
              ))}
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

          <div className={style.heartSpan} onClick={() => onAddToFavorite(id)}>
            <PiHeartBold />
          </div>

          <div className={style.cardBottomTitles}>
            <div className={style.namePrice}>
              <h4>{name}</h4>
              <p>{price} AZN</p>
            </div>

            <div className={style.ratingBasket}>
              <StarRating value={rating} />{" "}
              <div className={style.basketBg}>
                <a href="#">
                  <SlBasket style={{ width: "18px", height: "18px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
