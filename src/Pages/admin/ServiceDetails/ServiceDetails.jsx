import React, { useEffect, useState } from "react";
// styles
import styles from "./ServiceDetails.module.scss";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();
  const { head, header, description } = location.state || {};
  const [localDescription, setLocalDescription] = useState(description)
  const [localHeader, setLocalHeader] = useState(header)
  const handleDescriptionChange = (e) => {
    setLocalDescription(e.target.value);
  }
  const handleHeaderChanging = (e) => {
    setLocalHeader(e.target.value)
  }

  const handleSave = () => {
    console.log(localHeader, localDescription)
  }
  return (
    <div className={styles.serviceDetailsCont}>
      <div className={styles.heading}>{head}</div>
      <div className={styles.gridCont}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.subHeading}>Header</div>
          <div className={styles.inputCont}>
            <input onChange={handleHeaderChanging} value={localHeader} type="text" placeholder="Header" />
          </div>
        </div>

        {/* Row Section */}
        <div className={styles.row}>
          <div className={styles.subHeading}>Sıra</div>
          <div className={styles.inputCont}>
            <input className={head === 'Təmir' ? styles.disabledInput : ''} type="text" placeholder="Sıra" />
          </div>
        </div>

        {/* Photo Section */}
        <div className={styles.photo}>
          <div className={styles.photoPlaceholder}>
            <img src="https://via.placeholder.com/100" alt="placeholder" />
          </div>
          <div className={styles.photoText}>Şəkil əlavə et və ya dəyiş</div>
          <button className={`${head === 'Təmir' ? styles.disabledButton : styles.photoButton}`}>Seç</button>
        </div>

        {/* Description Section */}
        <div className={styles.desc}>
          <div className={styles.subHeading}>Təsvir</div>
          <div className={styles.inputCont}>
            <textarea onChange={handleDescriptionChange} value={localDescription} placeholder="Təsvir"></textarea>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton} onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
