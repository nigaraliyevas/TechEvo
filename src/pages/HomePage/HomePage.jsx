import styles from "./HomePage.module.scss";
import PcSection from "../../components/PcSection.jsx";
import MsSection from "../../components/MsSection";
import KbSection from "../../components/KbSection";
import InternCr from "/assets/images/HomePage/Products/InternCr.png";
import Delivery from "/assets/images/HomePage/Products/Delivery.png";
import Repair from "/assets/images/HomePage/Products/Repair.png";
import SecondHand from "/assets/images/HomePage/Products/SecondHand.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../../components/Slider.jsx";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="" style={{ paddingTop: "93px" }}>
          <SliderComponent />
        </div>

        {/* <div className={styles.container_top}>
                    <div className={styles.mainTitle}>
                        <h1>Empower Your Digital World</h1>
                        <p>Find the perfect computer, PC, or laptop for unbeatable performance</p>
                    </div>
                </div> */}
      </section>

      <section id={styles.specialselected}>
        <div className={styles.container_bottom}>
          <h3 className={styles.specialH3}>Xüsusi Seçimlər</h3>
          <div className={styles.pc}>PC</div>
          <PcSection count={4} />

          <div className={styles.mouse}>Mouse</div>
          <MsSection />

          <div className={styles.keyboard}>Keyboard</div>
          <KbSection />

          <div className={styles.services}>Xidmətlərimiz</div>

          <div className={styles.mainServices}>
            <div className={` ${styles.border} ${styles.iconsCenter}`}>
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
      </section>
    </>
  );
};

export default HomePage;
