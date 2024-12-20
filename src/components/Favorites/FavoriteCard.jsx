import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import StarRating from "../../components/Rating/StarRating";
import style from "./Favorites.module.scss";
import { useDispatch } from "react-redux";
import { useRemoveFavoriteMutation } from "../../redux/sercives/favoriteApi";
//import { useGetProductByIdQuery } from "../../redux/sercives/productApi"; // Yeni sorğunu import edin
import { SlBasket } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { addToCart } from "../../redux/slices/BasketSlice";

function FavoriteCard({ card, onRefetch, }) {
    const { name, price, imageUrl, rating } = card;
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [removeFavorite] = useRemoveFavoriteMutation();

    const handleRemoveFavorite = async (event) => {
      event.stopPropagation();
      try {
        await removeFavorite(card.id).unwrap();
        onRefetch(); // Favoritlər siyahısını yeniləyirik
      } catch (error) {
        console.error("Favoritdən çıxarılarkən xəta baş verdi:", error);
      }
    };

    const addBasket = (event) => {
        event.preventDefault(); // Default davranışın qarşısını alır
        if (card) dispatch(addToCart(card));
    };



    return (
        <div className={style.containerFavoriteCards}>
            {isMobile ? (
                <div className={style.mobileFavoriteCard}>
                    <div className={style.mobileNameHeart}>
                        <h4 className={style.mobileCardName}>{name}</h4>
                        <button 
                            className={style.cardActions} 
                            onClick={handleRemoveFavorite} 
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
                        <button onClick={addBasket} className={style.basketBg}>
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
                            <button onClick={addBasket} className={style.addToCartButton}>
                                <span style={{ paddingRight: "8px" }}>
                                    <SlBasket className={style.boldBasketIcon} />
                                </span>
                                Səbətə at
                            </button>
                        </div>
                    </div>
                    <button 
                        className={style.cardActions} 
                        onClick={handleRemoveFavorite} 
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
            )}
        </div>
    );
}

export default FavoriteCard;