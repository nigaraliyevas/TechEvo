import { PiHeartBold } from "react-icons/pi"
// import { Link } from "react-router-dom"
import style from "./ProductCard.module.scss";
import { SlBasket } from "react-icons/sl";
import { Rating } from "@mui/material";
import { useState } from "react";

const ProductCard = ({data}) => {
  const { name, price, image, rating } = data;
  console.log(data)
  const [selectedImage, setSelectedImage] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(null);

  const handleMouseMove = (e) => {
    const { clientX } = e;

    if (lastMouseX === null) {
      setLastMouseX(clientX); // Initialize lastMouseX when the mouse first moves
      return;
    }

    const deltaX = clientX - lastMouseX;

    if (Math.abs(deltaX) > 50) { // Change image every 50px movement
      const newIndex = deltaX < 0
        ? (selectedImage - 1 + image.length) % image.length // Move left
        : (selectedImage + 1) % image.length; // Move right

      setSelectedImage(newIndex); // Update the displayed image
      setLastMouseX(clientX); // Reset the reference point for mouse movement
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
        {/* Mouse movement changes the image */}
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

        {/* Image selector dots */}
        <div className={style.radioButtons}>
          {image.map((_, index) => (
            <div
              key={index}
              className={`${style.radioDiv} ${selectedImage === index ? style.selected : ''}`}
              onClick={() => handleDivClick(index)}
            />
          ))}
        </div>

        {/* Heart icon */}
        <div className={style.heartSpan}>
          <PiHeartBold />
        </div>

        <div className={style.mailTitle}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>{price} AZN</p>
          </div>

          {/* Rating and basket icon */}
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
}

export default ProductCard