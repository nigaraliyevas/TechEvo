import React from "react";
// styles
import styles from "./Delivery.module.scss";
// icons
import secIcon from "../../../assets/images/Services/security-safe.svg";
import {
  useGetDoorHeaderQuery,
  useGetDoorQuery,
  useGetDoorStepsQuery,
} from "../../../redux/sercives/serviceApi";

const Delivery = () => {
  const {
    data: header,
    error: headerError,
    isLoading: headerLoading,
  } = useGetDoorHeaderQuery();
  const {
    data: deliverySteps,
    error: deliveryStepsError,
    isLoading: deliveryStepsLoading,
  } = useGetDoorStepsQuery(); // merheleler
  const {
    data: delivery,
    error: deliveryError,
    isLoading: deliveryLoading,
  } = useGetDoorQuery(); // elave faydalar
  if (!deliveryError && !deliveryLoading) console.log(delivery);

  return (
    <div className={styles.delCont}>
      <div className={styles.delHeader}>
        <div className="container">
          <div className={styles.headTitle}>{header?.headerName}</div>
          <div className={styles.headInfo}>
            {header?.headerDescription}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.delMiddle}>
          <div className={styles.midTitle}>Necə İşləyir?</div>
          <div className={styles.midBoxCont}>
            {deliverySteps?.map((step, index) => (
              <div key={index} className={styles.midBox}>
                <div className={styles.no}>{step.id}</div>
                <div className={styles.boxTitle}>{step.stepName}</div>
                <div className={styles.boxInfo}>
                  {step.stepDescription}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.delEnd}>
          <div className={styles.endHeader}>Əlavə Faydalar</div>
          <div className={styles.endBoxCont}>
            {delivery?.map((del, index) => (
              <div key={index} className={styles.endBox}>
              <div className={styles.iconDiv}>
                <img
                  className={styles.iconImg}
                  src={del.benefitImage}
                  alt="security icon"
                />
              </div>
              <div className={styles.endInfo}>{del.benefitName}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
