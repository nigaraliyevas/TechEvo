import React from "react";
import { useMediaQuery } from "react-responsive";
import { TiHeartFullOutline } from "react-icons/ti";
import StarRating from "../../components/Rating/StarRating";
import style from "./Favorites.module.scss";
//import { useDispatch } from "react-redux";
import { useRemoveFavoriteMutation } from "../../redux/sercives/favoriteApi";
import { SlBasket } from "react-icons/sl";

function FavoriteCard({ card }) {
    const { name, price, imageUrl, rating, id } = card;
   // const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [removeFavorite] = useRemoveFavoriteMutation();

    const handleRemoveFavorite = async (event) => {
        event.stopPropagation();
        try {
            await removeFavorite(id).unwrap(); // Favoritdən silir
        } catch (error) {
            console.error("Favoritdən çıxarılarkən xəta baş verdi:", error);
        }
    };

    return (
        <div className={style.containerFavoriteCards}>
            {isMobile ? (
                // Mobil üçün fərqli struktur
                <div className={style.mobileFavoriteCard}>
                    <div className={style.mobileNameHeart}>
                        <h4 className={style.mobileCardName}>{name} </h4>
                        <div className={style.cardActions} onClick={handleRemoveFavorite} aria-label="Favoritlərdən çıxar">
                            <TiHeartFullOutline style={{
                                color: "white", cursor: "pointer",
                                width: "20px", height: "20px", position: "absolute",
                                top: "14px",
                                right: "12px",
                                bottom: "14px"
                            }} />
                        </div>
                    </div>
                    <div className={style.mobileCardContent}>
                        <div className={style.mobilCardImg}>
                            <img src={imageUrl[0]} alt={name} className={style.cardImg} />
                        </div>
                        <div className={style.rating}>
                            <StarRating value={rating} />
                            <p>{price} AZN</p>
                        </div>
                        <div className={style.basketBg}>
                            <a href="#">
                                <SlBasket style={{ width: "18px", height: "18px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                // Desktop üçün standart struktur
                <div className={style.favoriteCard}>
                    <div className={style.cardContent}>
                        <div className={style.cardFavoriteImg}>
                            <img src={imageUrl[0]} alt={name} className={style.cardImg} />
                        </div>
                        <div className={style.cardInfo}>
                            <h4>{name}</h4>
                            <div className={style.rating} style={{ marginBottom: "4px" }}>
                                <StarRating fontSize="1em" value={rating} />
                            </div>
                            <p>{price} AZN</p>
                            <button className={style.addToCartButton}>
                                <span style={{ paddingRight: "8px" }}>
                                    <a href="#">
                                        <SlBasket className={style.boldBasketIcon} />
                                    </a>
                                </span>
                                Səbətə əlavə et
                            </button>
                        </div>
                    </div>
                    <div className={style.cardActions} onClick={handleRemoveFavorite} aria-label="Favoritlərdən çıxar">
                        <TiHeartFullOutline style={{ color: "white", cursor: "pointer", width: "24px", height: "24px" }} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default FavoriteCard;
