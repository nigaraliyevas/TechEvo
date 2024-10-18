import React, { useState } from "react";
import { PiHeartBold } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import StarRating from  '../../../../../components/Rating/StarRating' // Yeni komponenti daxil edin
import style from "../../HomePage.module.scss";

function Card({ card }) {
  const { name, price, image, rating } = card;
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
      const newIndex = deltaX < 0
        ? (selectedImage - 1 + image.length) % image.length
        : (selectedImage + 1) % image.length;

      setSelectedImage(newIndex);
      setLastMouseX(clientX);
    }
  };

  const handleDivClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className={style.card}>
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
              width: `${image.length * 100}%`,
              height: "100%"
            }}
          >
            {image.map((imgSrc, index) => (
              <img
                key={index}
                className={style.cardImg}
                src={imgSrc}
                alt={name}
                style={{ width: `${100 / image.length}%` }}
              />
            ))}
          </div>
        </div>

        <div className={style.radioButtons}>
          {image.map((_, index) => (
            <div
              key={index}
              className={`${style.radioDiv} ${selectedImage === index ? style.selected : ''}`}
              onClick={() => handleDivClick(index)}
            />
          ))}
        </div>

        <div className={style.heartSpan}>
          <PiHeartBold />
        </div>

        <div className={style.mailTitle}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>{price} AZN</p>
          </div>

          <div className={style.ratingBasket}>
            <StarRating value={rating}/> {/* StarRating komponentini istifadə edin */}
            <div className={style.basketBg}>
              <a href="#">
                <SlBasket style={{ width: "18px", height: "18px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
