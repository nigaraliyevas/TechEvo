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

function FavoriteCard({ card, refetchFavorites }) {
    const { productId, name, price, imageUrl, rating } = card;
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
            await removeFavorite(productId).unwrap(); // Asinxron əməliyyat
            refetchFavorites(); // Favoritləri yeniləyirik
        } catch (error) {
            console.error("Favoritdən çıxarılarkən xəta baş verdi:", error);
        }
    };

    if (isLoading) return <p>Yüklənir...</p>;
    if (isError) return <p>Məhsul məlumatlarını çəkmək mümkün olmadı.</p>;

    const { name: productName, price: productPrice, imageUrl: productImage, rating: productRating } = productData || {};

    return (
        <div className={style.containerFavoriteCards}>
            {isMobile ? (
                <div className={style.mobileFavoriteCard}>
                    <div className={style.mobileNameHeart}>
                        <h4 className={style.mobileCardName}>{productName}</h4>
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
                                    top: "14px", right: "12px", bottom: "14px"
                                }}
                            />
                        </button>
                    </div>
                    <div className={style.mobileCardContent}>
                        <div className={style.mobilCardImg}>
                            <img src={productImage && productImage[0] ? productImage[0] : "defaultImage.jpg"} alt={productName} className={style.cardImg} />
                        </div>
                        <div className={style.rating}>
                            <StarRating value={productRating} />
                            <p>{productPrice} AZN</p>
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
                            <img src={productImage && productImage[0] ? productImage[0] : "defaultImage.jpg"} alt={productName} className={style.cardImg} />
                        </div>
                        <div className={style.cardInfo}>
                            <h4>{productName}</h4>
                            <div className={style.rating} style={{ marginBottom: "4px" }}>
                                <StarRating fontSize="1em" value={productRating} />
                            </div>
                            <p>{productPrice} AZN</p>
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
