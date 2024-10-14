import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { PiHeartBold } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import style from "../../HomePage.module.scss"; // Style idxalını yoxlayın, fayl mövcud olmalıdır

function Card({ card }) {
  const { name, price, image, rating } = card; // images -> image
  const [selectedImage, setSelectedImage] = useState(0);
  const [mouseMoving, setMouseMoving] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Mouse hərəkətini izləyir
  const handleMouseMove = (e) => {
    if (mouseMoving) return; // Əgər artıq mouse hərəkəti varsa, yeni hərəkətləri qəbul etmə

    const { clientX, target } = e;
    const { left, right } = target.getBoundingClientRect();
    const center = (left + right) / 2;

    const newIndex = clientX < center 
      ? (selectedImage - 1 + image.length) % image.length // Sola doğru sürükləyin
      : (selectedImage + 1) % image.length; // Sağa doğru sürükləyin

    setMouseMoving(true); // Mouse hərəkətinin başladığını bildirin

    const id = setTimeout(() => {
      setSelectedImage(newIndex);
      setMouseMoving(false); // Mouse hərəkətinin bitdiyini bildirin
    }, 300); // 300 millisekund gözləyin

    setTimeoutId(id); // Timeout ID-ni saxlayın
  };

  // Seçilmiş şəkli dəyişmək üçün radio button
  const handleRadioChange = (index) => {
    setSelectedImage(index);
    setMouseMoving(false); // Seçimdə mouse hərəkətini dayandırın
    clearTimeout(timeoutId); // Timeout-u təmizləyin
  };

  // Component unmounted olduğu zaman timeout-u təmizləyin
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className={style.card}>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>

      <div style={{ position: "relative" }}>
        {/* Mouse hərəkəti ilə şəkil dəyişir */}
        <div
          className={style.cardImgContainer}
          onMouseMove={handleMouseMove}
          style={{ overflow: "hidden" }}
        >
          <img
            className={style.cardImg}
            src={
              Array.isArray(image) && selectedImage < image.length 
                ? image[selectedImage] 
                : "defaultImageUrl.jpg" // Boş olduqda göstəriləcək şəkil
            }
            alt={name}
          />
        </div>

        {/* Radio Button-lar */}
        <div className={style.radioButtons}>
          {image.map((_, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`imageSelector-${name}`}
                checked={selectedImage === index}
                onChange={() => handleRadioChange(index)} // Seçilmiş şəkli dəyiş
              />
              {/* Radio buttonun içinin rəngi seçilmiş olduğunda dəyişir */}
              <span className={`${style.radioCircle} ${selectedImage === index ? style.selected : ''}`}></span>
            </label>
          ))}
        </div>

        {/* Ürək ikonu */}
        <div className={style.heartSpan}>
          <PiHeartBold />
        </div>

        <div className={style.mailTitle}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>{price} AZN</p>
          </div>

          {/* Reytinq və Səbət ikonu */}
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

export default Card;
