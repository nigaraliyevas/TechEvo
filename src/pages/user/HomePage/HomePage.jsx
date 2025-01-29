import styles from "./HomePage.module.scss";
import InternCr from "../../../assets/images/products/InternCr.png";
import Delivery from "../../../assets/images/products/Delivery.png";
import Repair from "../../../assets/images/products/Repair.png";
import SecondHand from "../../../assets/images/products/SecondHand.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "./Section/Section";
import SliderComponent from "./Section/Slider/Slider";
import { useGetProductsByCategoryNameQuery } from "../../../redux/sercives/productApi";
import { useGetFavoritesQuery } from "../../../redux/sercives/favoriteApi";
import { useGetRecommendedProductsQuery } from "../../../redux/sercives/productApi";
import { useNavigate } from "react-router-dom";
import { useCountVisitsMutation } from "../../../redux/sercives/viewCountApi";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

 const { data: laptopsData} = useGetProductsByCategoryNameQuery({categoryName: "Laptop" });

  const { data: mousesData } = useGetProductsByCategoryNameQuery({categoryName: "Mouse" });
  const { data: klaviaturasData } = useGetProductsByCategoryNameQuery({ categoryName: "Keyboard" });

  const [countVisits] = useCountVisitsMutation(); // Destructure the mutation function

  const fetchCountVisits = async () => {
    try {
      await countVisits().unwrap();
    } catch (err) {
      console.error("Failed to count visits:", err);
    }
  };

  // Favorit məhsulları sorğulamaq
  const { data: favoriteData, refetch: refetchFavorites } = useGetFavoritesQuery();
  const favoriteProductIds = favoriteData ? favoriteData.map(fav => fav.id) : [];
  const { data: recommendedData } = useGetRecommendedProductsQuery();
  useEffect(() => {
    fetchCountVisits();
  }, []);
  return (
    <>
      <section>
        <div>
          <SliderComponent />
        </div>
      </section>
      <section id={styles.specialselected}>
        <div className={styles.container_bottom}>
          {recommendedData && (
            <>
              <h3 className={styles.specialH3} style={{ marginBottom: "0px", paddingBottom: "0px" }}>
                Sizə Tövsiyyələr
              </h3>
              <Section
                // title={<h3 className="recomendedTitle">Sizə Tövsiyyələr</h3>}
                data={recommendedData}
                favoriteProductIds={favoriteProductIds}
                refetchFavorites={refetchFavorites}
              />
            </>
          )}
          <h3 className={styles.specialH3}>Xüsusi Seçimlər</h3>

          {/* Favorit məlumatları və yenidən yükləmə funksiyası ilə Section komponentlərinə məlumat göndərilir */}
          <Section title="PC" data={laptopsData} favoriteProductIds={favoriteProductIds} refetchFavorites={refetchFavorites} />
          <Section title="Mouse" data={mousesData} favoriteProductIds={favoriteProductIds} refetchFavorites={refetchFavorites} />
          <Section title="Keyboard" data={klaviaturasData} favoriteProductIds={favoriteProductIds} refetchFavorites={refetchFavorites} />

          <div className={styles.servicesDiv}>
            <div className={styles.services}>Xidmətlərimiz</div>
            <div className={styles.mainServices}>
              <div className={` ${styles.border} ${styles.iconsCenter}`} onClick={() => navigate("/credit")}>
                <img src={InternCr} />
                <div className={styles.text}>
                  <h3>Daxili kredit</h3>
                  <p>Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə uyğun olacaq.</p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`} onClick={() => navigate("/delivery")}>
                <img src={Delivery} />
                <div className={styles.text}>
                  <h3>Çatdırılma</h3>
                  <p>Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə uyğun olacaq.</p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`} onClick={() => navigate("/repair")}>
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