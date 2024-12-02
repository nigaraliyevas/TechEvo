import React from "react";
// styles
import styles from "./Repair.module.scss";
// icons
import tick from "../../../assets/images/Services/tick.svg";
import { useGetRepairHeaderQuery, useGetRepairQuery, useGetRepairStepsQuery } from "../../../redux/sercives/serviceApi";

const Repair = () => {
  const { data: service, error: serviceError, isLoading: serviceLoading } = useGetRepairQuery();
  const { data: steps, error: stepsError, isLoading: stepsLoading } = useGetRepairStepsQuery();
  const { data: header, error: headerError, isLoading: headerLoading} = useGetRepairHeaderQuery();


  return (
    <div className={styles.serviceCont}>
      <div className={styles.headingCont}>
        <div className="container">
          <div className={styles.headingText}>{header?.headerName}</div>
          <div className={styles.headingInfo}>{header?.headerDescription}</div>
        </div>
      </div>
      <div className="container">
        <div className={styles.middleCont}>
          <div className={styles.middleHeading}>Xidmətlərimiz</div>
          <div className={styles.boxCont}>
            {!serviceError && !serviceLoading
              ? service.map(srvc => (
                  <div key={srvc.id} className={styles.box}>
                    <div className={styles.boxHeading}>{srvc.serviceName}</div>
                    <div className={styles.list}>
                      {srvc.serviceComponents.map((item, index) => (
                        <div key={index} className={styles.punct}>
                          <div className={styles.tickDiv}>
                            <img className={styles.tickImg} src={tick} alt="tick icon" />
                          </div>
                          <div>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : "Yüklənir..."}
          </div>
        </div>
        <div className={styles.endingCont}>
          <div className={styles.endingHeading}>Necə Başlamaq Olar?</div>
          <div className={styles.boxCont}>
            {!stepsError && !stepsLoading
              ? steps.map(step => (
                  <div key={step.id} className={styles.box}>
                    <div className={styles.no}>{step.stepOrder}</div>
                    <div className={styles.boxHeader}>{step.stepName}</div>
                    <div className={styles.infoText}>{step.stepDescription}</div>
                  </div>
                ))
              : "Yüklənir..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
