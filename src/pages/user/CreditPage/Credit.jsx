import React from "react";
// styles
import styles from "./Credit.module.scss";
// images
import birbank from "../../../assets/images/Services/birbank.png";
import {
  useGetCreditCardQuery,
  useGetCreditHeader2Query,
  useGetCreditHeader1Query,
} from "../../../redux/sercives/serviceApi";

const Credit = () => {
  const {
    data: creditHeader1,
    error: creditHeader1Error,
    isLoading: creditHeader1Loading,
  } = useGetCreditHeader1Query();
  const {
    data: creditHeader2,
    error: creditHeader2Error,
    isLoading: creditHeader2Loading,
  } = useGetCreditHeader2Query();
  const {
    data: credit,
    error: creditError,
    isLoading: creditLoading,
  } = useGetCreditCardQuery();
  if (!creditError && !creditLoading) console.log(credit);

  return (
    <div className={styles.creditCont}>
      <div className={styles.crHeader}>
        <div className={styles.headTitle}>{creditHeader1?.headerName}</div>
        <div className={styles.headInfo}>
        {creditHeader1?.headerDescription}
        </div>
      </div>

       <div className={styles.myCont}>
        <div className={styles.crMid}>
          <div className={styles.midTitle}>{creditHeader2?.headerName}</div>
          <div className={styles.midInfo}>
            {creditHeader2?.headerDescription}
          </div>
        </div>
      </div>

      <div className={styles.crEnd}>
        <div className={`${styles.myCont} ${styles.endCont}`}>
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
