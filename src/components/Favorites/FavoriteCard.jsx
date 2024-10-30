import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import StarRating from "../../components/Rating/StarRating";
import style from "./Favorites.module.scss";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/slices/favoritesSlice";



function FavoriteCard({ card }) {
    const { name, price, imageUrl, rating, id } = card;
    const dispatch = useDispatch();

    const handleRemoveFavorite = (event) => {
        event.stopPropagation();
        dispatch(removeFromFavorites(id));
    };

    return (
        <div className={style.containerFavoriteCards}>
            <div className={style.favoriteCard}>

                <div className={style.cardContent}>
                    <div className={style.cardFavoriteImg}>
                        <div className={style.cardImg}> <img src={imageUrl[2]} alt={name} className={style.cardImg} /></div>
                    </div>
                    <div className={style.cardInfo}>
                        <h4>{name}</h4>
                        <div className={style.rating} style={{ marginBottom: "4px" }}>
                            <StarRating fontSize="1em" value={rating} />
                        </div>
                        <p>{price} AZN</p>


                        {/* <div className={style.basket}>
                            <a href="#">
                                <SlBasket style={{ width: "18px", height: "18px" }} />
                            </a>
                        </div> */}


                    </div>
                </div>

                <div className={style.cardActions} onClick={handleRemoveFavorite} aria-label="Favoritlərdən çıxar">
                    <TiHeartFullOutline style={{ color: "white", cursor: "pointer"}} />


                </div>
            </div>
        </div>
    );
}

export default FavoriteCard;









// import React, { useState } from "react";
// import { PiHeartBold } from "react-icons/pi";
// import { TiHeartFullOutline } from "react-icons/ti";
// import { SlBasket } from "react-icons/sl";
// import StarRating from "../../../../../components/Rating/StarRating";
// import style from "../../HomePage.module.scss";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToFavorites, removeFromFavorites } from "../../../../../redux/slices/favoritesSlice";

// function Card({ card }) {
//   const { name, price, imageUrl, rating, id } = card;
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.favorites);

//   // Favoritdə olub-olmadığını yoxlamaq üçün state əlavə edin
//   const isFavorite = favorites.some((fav) => fav.id === id);

//   const [selectedImage, setSelectedImage] = useState(0);
//   const [lastMouseX, setLastMouseX] = useState(null);

//   const handleToggleFavorite = (event) => {
//     event.stopPropagation();
//     event.preventDefault();

//     if (isFavorite) {
//       dispatch(removeFromFavorites(id));
//     } else {
//       dispatch(addToFavorites(card));
//     }
//   };

//   const handleMouseMove = (e) => {
//     const { clientX } = e;

//     if (lastMouseX === null) {
//       setLastMouseX(clientX);
//       return;
//     }

//     const deltaX = clientX - lastMouseX;

//     if (Math.abs(deltaX) > 50) {
//       const newIndex =
//         deltaX < 0
//           ? (selectedImage - 1 + imageUrl.length) % imageUrl.length
//           : (selectedImage + 1) % imageUrl.length;

//       setSelectedImage(newIndex);
//       setLastMouseX(clientX);
//     }
//   };


//   const handleDivClick = (index) => {
//     setSelectedImage(index);
//   };

//   return (
//     <Link style={({ textDecoration: "none" })} to={`/product?id=${id}`} className={style.card}>
//       <span className={style.cardAnimationSpan}></span>
//       <span className={style.cardAnimationSpan}></span>
//       <span className={style.cardAnimationSpan}></span>
//       <span className={style.cardAnimationSpan}></span>

//       <div style={{ position: "relative" }}>
//         <div
//           className={style.cardImgContainer}
//           onMouseMove={handleMouseMove} // Mouse üçün
//           // Mobil üçün toxunma hadisəsi
//           style={{ overflow: "hidden" }}
//         >
//           <div
//             className={style.imageSlider}
//             style={{
//               transform: `translateX(-${selectedImage * 25}%)`,
//               width: `${imageUrl.length * 100}%`,
//               height: "100%",
//             }}
//           >
//             {imageUrl.map((imgSrc, index) => (
//               <img
//                 key={index}
//                 className={style.cardImg}
//                 src={imgSrc}
//                 alt={name}
//                 style={{ width: `${100 / imageUrl.length}%` }}
//               />
//             ))}
//           </div>
//         </div>

//         <div className={style.radioButtons}>
//           {imageUrl.map((_, index) => (
//             <div
//               key={index}
//               className={`${style.radioDiv} ${selectedImage === index ? style.selected : ""
//                 }`}
//               onClick={() => handleDivClick(index)} // Mouse üçün klik
//             // Mobil üçün toxunma
//             />
//           ))}
//         </div>

//         <div className={style.heartSpan} onClick={handleToggleFavorite}>
//           {isFavorite ? (
//             <TiHeartFullOutline style={{ color: "white" }} />
//           ) : (
//             <PiHeartBold style={{ fill: "white" }} />
//           )}
//         </div>

//         <div className={style.cardBottomTitles}>
//           <div className={style.namePrice}>
//             <h4>{name}</h4>
//             <p>{price} AZN</p>
//           </div>

//           <div className={style.ratingBasket}>
//             <StarRating value={rating} />{" "}
//             <div className={style.basketBg}>
//               <a href="#">
//                 <SlBasket style={{ width: "18px", height: "18px" }} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default Card;

