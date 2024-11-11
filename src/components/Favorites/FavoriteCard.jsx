// FavoriteCard.jsx
import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import StarRating from "../../components/Rating/StarRating";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../redux/sercives/productApi";
import { SlBasket } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { addToCart } from "../../redux/slices/BasketSlice";
import { useRemoveFavoriteMutation } from "../../redux/sercives/favoriteApi";
import style from "./Favorites.module.scss";

function FavoriteCard({ card, refetchFavorites }) { // refetchFavorites prop-unu qəbul edirik
    const { productId } = card;
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const { data: productData, isLoading, isError } = useGetProductByIdQuery(productId);
    const [removeFavorite] = useRemoveFavoriteMutation();

    const addBasket = (event) => {
        event.preventDefault();
        if (productData) dispatch(addToCart(productData));
    };

    const handleRemoveFavorite = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        try {
            // Məhsulu favoritdən çıxarma əməliyyatı
            console.log("Removing favorite with productId:", productId);
            
            // Asinxron əməliyyatı düzgün idarə etmək üçün `unwrap()` istifadə edin
            await removeFavorite(productId).unwrap(); // serverə sorğu göndərir və cavabı qaytarır
    
            console.log("Məhsul favoritdən çıxarıldı");

            // Favoritlər səhifəsini yeniləmək üçün refetch funksiyasını çağırırıq
            refetchFavorites(); // Favoritlər yenilənir
        } catch (error) {
            console.error("Favoritdən çıxarılarkən xəta baş verdi:", error);
        }
    };

    if (isLoading) return <p>Yüklənir...</p>;
    if (isError) return <p>Məhsul məlumatlarını çəkmək mümkün olmadı.</p>;

    const { name, price, imageUrl, rating } = productData || {};

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
                                Səbətə əlavə et
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
                            style={{ color: "white", cursor: "pointer", width: "24px", height: "24px" }}
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

export default FavoriteCard;
