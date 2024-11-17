import { PiHeartBold } from "react-icons/pi";
import style from "./ProductCard.module.scss";
import { SlBasket } from "react-icons/sl";
import { Rating } from "@mui/material";
import { useState } from "react";

const ProductCard = ({ data }) => {
  const { name, price, discountPrice, imageUrl, rating } = data;
  // console.log(name);
  
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
    <div className={style.card}>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>

      <div style={{ position: "relative" }}>
        {/* Image Slider */}
        <div
          className={style.cardImgContainer}
          onMouseMove={handleMouseMove}
          style={{ overflow: "hidden" }}
        >
          <div
            className={style.imageSlider}
            style={{
              transform: `translateX(-${selectedImage * 100}%)`,
              width: `${imageUrl.length * 100}%`,
              height: "100%",
              display: "flex",
            }}
          >
            {imageUrl.map((imgSrc, index) => (
              <img
                key={index}
                className={style.cardImg}
                src={imgSrc}
                alt={`${name} image ${index + 1}`}
                style={{ flex: "0 0 100%" }}
              />
            ))}
          </div>
        </div>

        {/* Image Selector Dots */}
        <div className={style.radioButtons}>
          {imageUrl.map((_, index) => (
            <div
              key={index}
              className={`${style.radioDiv} ${
                selectedImage === index ? style.selected : ""
              }`}
              onClick={() => handleDivClick(index)}
            />
          ))}
        </div>

        {/* Favorite Icon */}
        <div className={style.heartSpan}>
          <PiHeartBold />
        </div>

        {/* Product Information */}
        <div className={style.mailTitle}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>
              <span style={{ textDecoration: discountPrice ? "line-through" : "none" }}>
                {price} AZN
              </span>
              {discountPrice && (
                <span style={{ color: "red", marginLeft: "8px" }}>
                  {discountPrice} AZN
                </span>
              )}
            </p>
          </div>

          {/* Rating and Add to Cart */}
          <div className={style.ratingBasket}>
            <Rating
              size="small"
              precision={0.5}
              name="read-only"
              value={rating}
              readOnly
            />
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
};

export default ProductCard;
