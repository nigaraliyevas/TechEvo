import styles from "./HomePage";
import InternCr from "../../../assets/images/products/InternCr";
import Delivery from "../../../assets/images/products/Delivery.png";
import Repair from "../../../assets/images/products/Repair.png";
import SecondHand from "../../../assets/images/products/SecondHand.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "./Section/Section";
import SliderComponent from "./Section/Slider/Slider";
import { useGetProductsByCategoryNameQuery } from "../../../redux/sercives/productApi";

const HomePage = () => {
  const { data: laptopsData, isLoading: isLaptopsLoading } = useGetProductsByCategoryNameQuery("Laptop");
  const { data: mousesData, isLoading: isMousesLoading } = useGetProductsByCategoryNameQuery("Mouse");
  const { data: klaviaturasData, isLoading: isKlaviaturasLoading } = useGetProductsByCategoryNameQuery("Klaviatura");

    // useGetProductsByCategoryNameQuery("");


  return (
    <>
      <section>
        <div>
          <SliderComponent />
        </div>


      </section>
      <section id={styles.specialselected}>
        <div className={styles.container_bottom}>
          <h3 className={styles.specialH3}>Xüsusi Seçimlər</h3>
          <Section title="PC" data={laptopsData} />
          <Section title="Mouse" data={mousesData} />
          <Section title="Keyboard" data={klaviaturasData}/> 
          <div className={styles.servicesDiv}>
            <div className={styles.services}>Xidmətlərimiz</div>
            <div className={styles.mainServices}>
              <div className={` ${styles.border} ${styles.iconsCenter}`}>
                <img src={InternCr} />
                <div className={styles.text}>
                  <h3>Daxili kredit</h3>
                  <p>
                    Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə
                    uyğun olacaq.
                  </p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={Delivery} />

                <div className={styles.text}>
                  <h3>Çatdırılma</h3>
                  <p>
                    Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə
                    uyğun olacaq.
                  </p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={Repair} />
                <div className={styles.text}>
                  <h3>Təmir</h3>
                  <p>
                    Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə
                    uyğun olacaq.
                  </p>
                </div>
              </div>
              <div className={`${styles.border} ${styles.iconsCenter}`}>
                <img src={SecondHand} />
                <div className={styles.text}>
                  <h3>İkinci əl satış</h3>
                  <p>
                    Bizim kredit təkliflərimizlə Tech məhsulları sizin büdcənizə
                    uyğun olacaq.
                  </p>
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
