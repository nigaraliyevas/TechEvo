import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import StarRating from "../../components/Rating/StarRating";
import style from "./Favorites.module.scss";
import { useDispatch } from "react-redux";
import { useRemoveFavoriteMutation } from "../../redux/sercives/favoriteApi";
import { SlBasket } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { addToCart } from "../../redux/slices/BasketSlice";

function FavoriteCard({ card }) {
    const { name, price, imageUrl, rating, id } = card; // `id` burada alınır
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [removeFavorite] = useRemoveFavoriteMutation();

    const handleRemoveFavorite = async (event, id) => {
        event.stopPropagation();
        
        if (!id) {
            console.error("Məhsul ID-si tapılmadı");
            return;
        }

        try {
            await removeFavorite(id).unwrap(); // Favoritdən silir
        } catch (error) {
            console.error("Favoritdən çıxarılarkən xəta baş verdi:", error);
        }
    };

    const addbasket = (event) => {
        event.preventDefault(); // Default davranışın qarşısını alır
        dispatch(addToCart(card)); // Kartınıza əlavə edir
    };

    return (
        <div className={style.containerFavoriteCards}>
            {isMobile ? (
                <div className={style.mobileFavoriteCard}>
                    <div className={style.mobileNameHeart}>
                        <h4 className={style.mobileCardName}>{name}</h4>
                        <button 
                            className={style.cardActions} 
                            onClick={(e) => handleRemoveFavorite(e, id)} // id ötürülür
                            aria-label="Favoritlərdən çıxar"
                            style={{ background: "none", border: "none" }}
                        >
                            <TiHeartFullOutline
                                style={{
                                    color: "white", cursor: "pointer",
                                    width: "20px", height: "20px", position: "absolute",
                                    top: "14px",
                                    right: "12px",
                                    bottom: "14px"
                                }}
                            />
                        </button>
                    </div>
                    <div className={style.mobileCardContent}>
                        <div className={style.mobilCardImg}>
                            <img src={imageUrl && imageUrl[0] ? imageUrl[0] : "defaultImage.jpg"} alt={name} className={style.cardImg} />
                        </div>
                        <div className={style.rating}>
                            <StarRating value={rating} />
                            <p>{price} AZN</p>
                        </div>
                        <button onClick={addbasket} className={style.basketBg}>
                            <SlBasket style={{ width: "18px", height: "18px" }} />
                        </button>
                    </div>
                </div>
            ) : (
                <div className={style.favoriteCard}>
                    <div className={style.cardContent}>
                        <div className={style.cardFavoriteImg}>
                            <img src={imageUrl && imageUrl[0] ? imageUrl[0] : "defaultImage.jpg"} alt={name} className={style.cardImg} />
                        </div>
                        <div className={style.cardInfo}>
                            <h4>{name}</h4>
                            <div className={style.rating} style={{ marginBottom: "4px" }}>
                                <StarRating fontSize="1em" value={rating} />
                            </div>
                            <p>{price} AZN</p>
                            <button onClick={addbasket} className={style.addToCartButton}>
                                <span style={{ paddingRight: "8px" }}>
                                    <SlBasket className={style.boldBasketIcon} />
                                </span>
                                Səbətə əlavə et
                            </button>
                        </div>
                    </div>
                    <button 
                        className={style.cardActions} 
                        onClick={(e) => handleRemoveFavorite(e, id)} // id ötürülür
                        aria-label="Favoritlərdən çıxar"
                        style={{ background: "none", border: "none" }}
                    >
                        <TiHeartFullOutline
                            style={{ color: "white", cursor: "pointer", width: "24px", height: "24px" }}
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

export default FavoriteCard;
