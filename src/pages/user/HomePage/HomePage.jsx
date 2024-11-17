"./HomePage.module.scss";
import InternCr from "../../../assets/images/products/InternCr.png";
import Delivery from "../../../assets/images/products/Delivery.png";
import Repair from "../../../assets/images/products/Repair.png";
import SecondHand from "../../../assets/images/products/SecondHand.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { useGetProductsByCategoryNameQuery } from "../../../redux/sercives/productApi";
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from "../../../redux/sercives/favoriteApi";
import Section from "./Section/Section";
import SliderComponent from "./Section/Slider/Slider";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { data: laptopsData } = useGetProductsByCategoryNameQuery({categoryName: "Laptop"});
  const { data: mousesData } = useGetProductsByCategoryNameQuery({categoryName: "Mouse"});
  const { data: klaviaturasData } = useGetProductsByCategoryNameQuery({categoryName: "Klaviatura"});

  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavoriteToggle = product => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
      return;
    }

    if (favorites.some(fav => fav.id === product.id)) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.id !== product.id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      removeFavorite(product.id);
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      addFavorite({ productId: product.id });
    }
  };

  return (
    <>
      <section>
        <SliderComponent />
      </section>
      <section id={styles.specialselected}>
        <div className={styles.container_bottom}>
          <h3 className={styles.specialH3}>Xüsusi Seçimlər</h3>
          <Section title="Laptop" data={laptopsData} onFavoriteToggle={handleFavoriteToggle} />
          <Section title="Mouse" data={mousesData} onFavoriteToggle={handleFavoriteToggle} />
          <Section title="Klaviatura" data={klaviaturasData} onFavoriteToggle={handleFavoriteToggle} />
          <div className={styles.servicesDiv}>
            <div className={styles.services}>Xidmətlərimiz</div>
            <div className={styles.mainServices}>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={InternCr} />
                <div className={styles.text}>
                  <h3>Daxili kredit</h3>
                  <p>Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə uyğun olacaq.</p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={Delivery} />
                <div className={styles.text}>
                  <h3>Çatdırılma</h3>
                  <p>Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə uyğun olacaq.</p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={Repair} />
                <div className={styles.text}>
                  <h3>Təmir</h3>
                  <p>Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə uyğun olacaq.</p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={SecondHand} />
                <div className={styles.text}>
                  <h3>İkinci əl satış</h3>
                  <p>Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə uyğun olacaq.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
