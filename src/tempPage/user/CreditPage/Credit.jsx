import React from "react";
// styles
import styles from "./Credit.module.scss";
// images
import birbank from "../../../assets/images/Services/birbank.png";

const Credit = () => {
  return (
    <div className={styles.creditCont}>
      <div className={styles.crHeader}>
        <div className={styles.headTitle}>Rahat alış-veriş seçimləri</div>
        <div className={styles.headInfo}>
          Tech-Evo olaraq sizə rahat alış-veriş təklif edirik.
        </div>
      </div>

      <div className="container">
        <div className={styles.crMid}>
          <div className={styles.midTitle}>Daxili Kredit</div>
          <div className={styles.midInfo}>
            Şəxsiyyət vəsiqənizi təqdim edərək, məhsulu dərhal əldə edə
            bilərsiniz. Sonra isə daxili Kredit ilə 6, 12 və ya 24 ay müddətinə
            rahatlıqla ödəyə bilərsiniz.
          </div>
        </div>
      </div>

      <div className={styles.crEnd}>
        <div className={`container ${styles.endCont}`}>
          <div className={styles.endLeft}>
            <div className={styles.endTitle}>Birkart Taksit:</div>
            <div className={styles.endInfo}>
              Birkartınızla 6, 12 və ya 24 ay müddətinə taksitlə ödəniş edə
              bilərsiniz. Kredit Şərtləri ilə bağlı daha ətraflı məlumat üçün
              mağazamıza müraciət edin.
            </div>
          </div>
          <div className={styles.endRight}>
            <div className={styles.endDiv}>
              <img className={styles.endImg} src={birbank} alt="card photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
