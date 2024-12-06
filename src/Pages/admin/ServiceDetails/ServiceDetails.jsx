import React from "react";
// styles
import styles from "./ServiceDetails.module.scss";

const ServiceDetails = () => {
  return (
    <div className={styles.serviceDetailsCont}>
      <div className={styles.heading}>Xidmətlər</div>
      <div className={styles.gridCont}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.subHeading}>Header</div>
          <div className={styles.inputCont}>
            <input type="text" placeholder="Header" />
          </div>
        </div>

        {/* Row Section */}
        <div className={styles.row}>
          <div className={styles.subHeading}>Sıra</div>
          <div className={styles.inputCont}>
            <input type="text" placeholder="Sıra" />
          </div>
        </div>

        {/* Photo Section */}
        <div className={styles.photo}>
          <div className={styles.photoPlaceholder}>
            <img src="https://via.placeholder.com/100" alt="placeholder" />
          </div>
          <div className={styles.photoText}>Şəkil əlavə et və ya dəyiş</div>
          <button className={styles.photoButton}>Seç</button>
        </div>

        {/* Description Section */}
        <div className={styles.desc}>
          <div className={styles.subHeading}>Təsvir</div>
          <div className={styles.inputCont}>
            <textarea placeholder="Təsvir"></textarea>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
