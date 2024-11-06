import React, { useState } from "react";
import { PiHeartBold } from "react-icons/pi";
import { TiHeartFullOutline } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import StarRating from "../../../../../components/Rating/StarRating";
import style from "../../HomePage.module.scss";
import { Link, useNavigate } from "react-router-dom"; // useNavigate-i idxal et
// import { useDispatch, useSelector } from "react-redux";



function Card({ card }) {
  const { name, price, imageUrl, rating, id } = card;
  // const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites);
  const navigate = useNavigate(); // useNavigate-i yaradın

  // Kartın sevilənlərdə olub-olmadığını yoxlayın
  //  const isFavorite = favorites.some((fav) => fav.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [lastMouseX, setLastMouseX] = useState(null);

  const handleToggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();

    //   // Ürək ikonuna klik edərkən AccountPage-ə keçid
    navigate("/accountpage"); // Bu yolu öz hesab səhifənizin yoluna uyğunlaşdırın

    // if (isFavorite) {
    //   dispatch(removeFromFavorites(id));
    // } else {
    //   dispatch(addToFavorites(card));
    // }
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

  return (
    <Link style={({ textDecoration: "none" })} to={`/product?id=${id}`} className={style.card}>
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
              className={`${style.radioDiv} ${selectedImage === index ? style.selected : ""}`}
              onClick={() => handleDivClick(index)} // Siçan üçün klik
            />
          ))}
        </div>

        {/* <div className={style.heartSpan} onClick={handleToggleFavorite}>
          {isFavorite ? (
            <TiHeartFullOutline style={{ color: "white" }} />
          ) : (
            <PiHeartBold style={{ fill: "white" }} />
          )}
        </div> */}

        <div className={style.cardBottomTitles}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>{price} AZN</p>
          </div>

          <div className={style.ratingBasket}>
            <StarRating value={rating} />
            <div className={style.basketBg}>
              <a href="#">
                <SlBasket style={{ width: "18px", height: "18px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
