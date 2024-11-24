import React from "react";
// styles
import styles from "./Repair.module.scss";
// icons
import tick from "../../../assets/images/Services/tick.svg";
import { useGetservicesQuery } from "../../../redux/sercives/serviceApi";

const Repair = () => {

  const {data: service, error: serviceError, isLoading: serviceLoading} = useGetservicesQuery();
  if(!serviceError && !serviceLoading) console.log(service);

  return (
    <div className="container">
      <div className={styles.serviceCont}>
        <div className={styles.headingCont}>
          <div className={styles.headingText}>
            Texniki Çətinlikləriniz Var? Biz Həll Edirik!
          </div>
          <div className={styles.headingInfo}>
            Tech-Evo-da kompüterlərinizin düzgün işləməsi üçün bir sıra
            xidmətlər təklif edirik. Hardware təmiri, software problemləri,
            rutin texniki xidmət və daha çox xidmətlərimizdən yararlana
            bilərsiniz.
          </div>
        </div>
        <div className={styles.middleCont}>
          <div className={styles.middleHeading}>Xidmətlərimiz</div>
          <div className={styles.boxCont}>
            <div className={styles.box}>
              <div className={styles.boxHeading}>Hardware Təmiri</div>
              <div className={styles.list}>
                <div className={styles.punct}>
                  <div className={styles.tickDiv}>
                    <img
                      className={styles.tickImg}
                      src={tick}
                      alt="tick icon"
                    />
                  </div>
                  <div>Ekran təmiri</div>
                </div>
                <div className={styles.punct}>
                  <div>
                    <img src={tick} alt="tick icon" />
                  </div>
                  <div>Anakart dəyişdirilməsi</div>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxHeading}>Software</div>
              <div className={styles.list}>
                <div className={styles.punct}>
                  <div>
                    <img src={tick} alt="tick icon" />
                  </div>
                  <div>Əməliyyat sistemi quraşdırılması (Windows, macOS)</div>
                </div>
                <div className={styles.punct}>
                  <div>
                    <img src={tick} alt="tick icon" />
                  </div>
                  <div>Driver quraşdırılması və yenilənməsi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.endingCont}>
          <div className={styles.endingHeading}>Necə Başlamaq Olar?</div>
          <div className={styles.boxCont}>
            <div className={styles.box}>
                <div className={styles.no}>1</div>
                <div className={styles.boxHeader}>Bizimlə Əlaqə saxlayın və ya bir-başa ünvanımıza gəlin</div>
                <div className={styles.infoText}>Telefon, e-poçt və ya online əlaqə forması vasitəsilə bizə müraciət edə bilərsiniz.</div>
            </div>
            <div className={styles.box}>
                <div className={styles.no}>2</div>
                <div className={styles.boxHeader}>Probleminizi Təsvir Edin</div>
                <div className={styles.infoText}>Qarşılaşdığınız problemi aydın şəkildə təsvir edin.</div>
            </div>
            <div className={styles.box}>
                <div className={styles.no}>3</div>
                <div className={styles.boxHeader}>Təmir Vaxtını Təyin Edin</div>
                <div className={styles.infoText}>Cihazınızı təmir üçün gətirmək və ya götürmək üçün əlverişli vaxtı təyin edin.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
