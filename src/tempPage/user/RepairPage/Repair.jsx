import React from "react";
// styles
import styles from "./Repair.module.scss";
// icons
import tick from "../../../assets/images/Services/tick.svg";
import { useGetServicesQuery, useGetStepsQuery } from "../../../redux/sercives/serviceApi";

const Repair = () => {
  const { data: service, error: serviceError, isLoading: serviceLoading } = useGetServicesQuery();
  const { data: steps, error: stepsError, isLoading: stepsLoading } = useGetStepsQuery();
  if(!serviceError && !serviceLoading) console.log(service); 

  return (
    <div className={styles.serviceCont}>
      <div className={styles.headingCont}>
        <div className="container">
          <div className={styles.headingText}>Texniki Çətinlikləriniz Var? Biz Həll Edirik!</div>
          <div className={styles.headingInfo}>Tech-Evo-da kompüterlərinizin düzgün işləməsi üçün bir sıra xidmətlər təklif edirik. Hardware təmiri, software problemləri, rutin texniki xidmət və daha çox xidmətlərimizdən yararlana bilərsiniz.</div>
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
