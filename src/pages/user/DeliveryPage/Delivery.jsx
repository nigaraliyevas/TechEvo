import React from "react";
// styles
import styles from "./Delivery.module.scss";
// icons
import secIcon from "../../../assets/images/Services/security-safe.svg";

const Delivery = () => {
  return (
    <div className="container">
      <div className={styles.delCont}>
        <div className={styles.delHeader}>
          <div className={styles.headTitle}>Qapıdan Qapıya Çatdırılma</div>
          <div className={styles.headInfo}>
            Tech-evo olaraq, sifarişlərinizi rahatlığınız üçün birbaşa qapınıza
            çatdırırıq. Bakı daxili çatdırılma xidmətimizdən yararlanmaq olduqca
            asandır.
          </div>
        </div>
        <div className={styles.delMiddle}>
          <div className={styles.midTitle}>Necə İşləyir?</div>
          <div className={styles.midBoxCont}>
            <div className={styles.midBox}>
              <div className={styles.no}>1</div>
              <div className={styles.boxTitle}>Məhsul Seçimi</div>
              <div className={styles.boxInfo}>
                İstədiyiniz məhsulu seçin və səbətə əlavə edin.
              </div>
            </div>
            <div className={styles.midBox}>
              <div className={styles.no}>1</div>
              <div className={styles.boxTitle}>Məhsul Seçimi</div>
              <div className={styles.boxInfo}>
                İstədiyiniz məhsulu seçin və səbətə əlavə edin.
              </div>
            </div>
            <div className={styles.midBox}>
              <div className={styles.no}>1</div>
              <div className={styles.boxTitle}>Məhsul Seçimi</div>
              <div className={styles.boxInfo}>
                İstədiyiniz məhsulu seçin və səbətə əlavə edin.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.delEnd}>
          <div className={styles.endHeader}>Əlavə Faydalar</div>
          <div className={styles.endBoxCont}>
            <div className={styles.endBox}>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconImg}
                  src={secIcon}
                  alt="security icon"
                />
              </div>
              <div className={styles.endInfo}>Tez və etibarlı çatdırılma</div>
            </div>
            <div className={styles.endBox}>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconImg}
                  src={secIcon}
                  alt="security icon"
                />
              </div>
              <div className={styles.endInfo}>Tez və etibarlı çatdırılma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
