import styles from './UserAgreement.module.scss'
import tick from "../../assets/images/Register/tick-circle.svg";
import { useState, useEffect } from 'react';
const UserAgreement = ( { sendDataToParent, updateFormData } ) => {
  let [isCheckedFromBox, setIsCheckedFromBox] = useState(false);

  const handleAccept = () => {
    setIsCheckedFromBox(true);
    updateFormData(true);
  }

  const handleReject = () => {
    setIsCheckedFromBox(false);
  }

  useEffect(() => {
    sendDataToParent(isCheckedFromBox);
  }, [isCheckedFromBox, sendDataToParent])


  return (
    <>
    <div className={styles.outerCont}></div>
      <div className={styles.termsContainer}>
        <div className={styles.headerTerms}>
          İstifadəçi şərtləri
        </div>
        <div className={styles.puncts}>
          <div className={styles.case}>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={tick} alt="tick sign" />
            </div>
            <div>Used to authenticate and track logged-in users.</div>
          </div>
          <div className={styles.case}>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={tick} alt="tick sign" />
            </div>
            <div>These cookies track user behavior, such as visited pages and product interactions, for analytics and marketing purposes.</div>
          </div>
          <div className={styles.case}>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={tick} alt="tick sign" />
            </div>
            <div>Used to authenticate and track logged-in users.</div>
          </div>
          <div className={styles.case}>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={tick} alt="tick sign" />
            </div>
            <div>These cookies track user behavior, such as visited pages and product interactions, for analytics and marketing purposes.</div>
          </div>
          <div className={styles.case}>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={tick} alt="tick sign" />
            </div>
            <div>Used to authenticate and track logged-in users.</div>
          </div>
          <div  className={styles.case}>
            <div className={styles.iconCont}>
              <img className={styles.iconImg} src={tick} alt="tick sign" />
            </div>
            <div>These cookies track user behavior, such as visited pages and product interactions, for analytics and marketing purposes.</div>
          </div>
        </div>
        <div className={styles.btnCont}>
          <button onClick={handleReject} className={styles.btnClose}>Bağla</button>
          <button onClick={handleAccept} className={styles.btnAccept}>Razıyam</button>
        </div>
      </div>
    </>
  )
}

export default UserAgreement
