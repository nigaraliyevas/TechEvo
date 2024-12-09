import React, { useEffect, useState } from "react";
// styles
import styles from "./ServiceDetails.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useChangeRepairMutation,
  useCreateRepairHeaderMutation,
  useCreateRepairMutation,
  useCreateStepMutation,
} from "../../../redux/sercives/serviceApi";

const ServiceDetails = () => {
  // creating(editing) header and description of the first part
  const [
    createRepairHeader,
    {
      data: repairHeaderChange,
      isLoading: repairHeaderChangeIsLoading,
      error: repairHeaderChangeError,
    },
  ] = useCreateRepairHeaderMutation();
  const location = useLocation();
  const { head, header, description, id } = location.state || {};
  const [localDescription, setLocalDescription] = useState(description);
  const [localArray, setLocalArray] = useState(description);
  const [localHeader, setLocalHeader] = useState(header);
  const [newOrder, setNewOrder] = useState(null);
  const navigate = useNavigate();

  // editing header and description of the second part
  const [
    changeRepair,
    {
      data: repairChange,
      isLoading: repairChangeIsLoading,
      error: repairChangeError,
    },
  ] = useChangeRepairMutation();

  // creating the second part
  const [
    createRepair,
    {
      data: repairCreate,
      isLoading: repairCreateIsLoading,
      error: repairCreateError,
    }
  ] = useCreateRepairMutation();

  const [
    createStep,
    {
      data: stepCreate,
      isLoading: stepCreateIsLoading,
      error: stepCreateError,
    }
  ] = useCreateStepMutation();

  // creating(editing) header and description of the first part
  const handleHeaderDescriptionChange = (e) => {
    setLocalDescription(e.target.value);
  };
  const handleHeaderChanging = (e) => {
    setLocalHeader(e.target.value);
  };
  const handleRepairDescriptionChange = (e) => {
    // setLocalDescription(e.target.value.split(","));
    setLocalArray(e.target.value.split(","));
  };
  const handleOrderChanging = (e) => {
    setNewOrder(e.target.value)
  }
  const handleSave = async () => {   // creating(editing) header and description of the first part
    if (head === "Təmir") {
      console.log(location.state); 
      if (localHeader.trim() === "" || localDescription.trim() === "") {
        alert("Xanalar bos olmamalidir");
        return;
      }
      const body = {
        headerName: localHeader,
        headerDescription: localDescription,
      };

      try {
        await createRepairHeader(body);
        navigate("/admin/adminRepair", {
          state: {
            head: head,
            header: localHeader,
            description: localDescription,
          },
        });
      } catch (err) {
        console.log("Error bash verdi", err);
      }
      return;
    }

    // editing header and description of the second part
    else if (head === "Xidmətlərimiz" && sessionStorage.getItem('method') === 'editxidmet') {
      if (localHeader.trim() === "" || localDescription.length === 0 || localDescription.some(item => item.trim() === "")) {
        alert("Xanalar bos olmamalidir");
        return;
      }
      const body2 = {
        serviceName: localHeader.trim(),
        serviceComponents: localDescription,
      };
      // console.log(id, typeof body2.serviceComponents, typeof body2.serviceName);
      console.log(JSON.stringify(body2, null, 2));
      try {
        await changeRepair(id, body2);
        // navigate("/admin/adminRepair", {
        //   state: {
        //     head: head,
        //     header: localHeader,
        //     description: localDescription,
        //     id: id,
        //   },
        // });
      } catch (err) {
        console.log("Error bash verdi", err);
      }
    }

    else if(head === "Xidmətlərimiz" && sessionStorage.getItem('method') === 'addxidmet') {
      if (localHeader.trim() === "" || localArray.length === 0 || localArray.some(item => item.trim() === "")) {
        alert("Xanalar bos olmamalidir");
        return;
      }
      const body = {
        serviceName: localHeader,
        serviceComponents: localArray,
      };

      try {
        await createRepair(body);
        sessionStorage.removeItem('method');
        navigate("/admin/adminRepair", {
          state: {
            head: head,
            header: localHeader,
            description: localArray,
          },
        });
      } catch (err) {
        console.log("Error bash verdi", err);
      }
      return;
    }

    else if(head === "Necə başlamaq olar?" && sessionStorage.getItem('method') === 'addstep') {
      console.log(location.state);  
      if (localHeader.trim() === "" || localDescription.trim() === "") {
        alert("Xanalar bos olmamalidir");
        return;
      }
      const body = {
        stepName: localHeader,
        stepDescription: localDescription,
        stepOrder: newOrder,
      };

      try {
        await createStep(body);
        sessionStorage.removeItem('method');
        navigate("/admin/adminRepair", {
          state: {
            head: head,
            header: localHeader,
            description: localArray,
          },
        });
      } catch (err) {
        console.log("Error bash verdi", err);
      }
      return;
    }
  };
  return (
    <div className={styles.serviceDetailsCont}>
      <div className={styles.heading}>{head}</div>
      <div className={styles.gridCont}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.subHeading}>Header</div>
          <div className={styles.inputCont}>
            <input
              onChange={handleHeaderChanging}
              value={localHeader}
              type="text"
              placeholder="Header"
            />
          </div>
        </div>

        {/* Row Section */}
        <div className={styles.row}>
          <div className={styles.subHeading}>Sıra</div>
          <div className={styles.inputCont}>
            <input
              disabled={head === "Təmir" || head === "Xidmətlərimiz"}
              className={
                head === "Təmir" || head === "Xidmətlərimiz" ? styles.disabledInput : ""
              }
              type="number"
              placeholder="Sıra"
              onChange={handleOrderChanging}
            />
          </div>
        </div>

        {/* Photo Section */}
        <div className={styles.photo}>
          <div className={styles.photoPlaceholder}>
            <img src="https://via.placeholder.com/100" alt="placeholder" />
          </div>
          <div className={styles.photoText}>Şəkil əlavə et və ya dəyiş</div>
          <button
            disabled={head === "Təmir" || "Xidmətlərimiz"}
            className={`${
              head === "Təmir" || "Xidmətlərimiz"
                ? styles.disabledButton
                : styles.photoButton
            }`}
          >
            Seç
          </button>
        </div>

        {/* Description Section */}
        <div className={styles.desc}>
          <div className={styles.subHeading}>Təsvir</div>
          <div className={styles.inputCont}>
            <textarea
              onChange={
                head === "Təmir" || head === "Necə başlamaq olar?"
                  ? handleHeaderDescriptionChange
                  : handleRepairDescriptionChange
              }
              value={localDescription}
              placeholder="Təsvir"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button
          className={styles.saveButton}
          disabled={repairHeaderChangeIsLoading || repairChangeIsLoading || repairCreateIsLoading || stepCreateIsLoading}
          onClick={handleSave}
        >
          {repairHeaderChangeIsLoading || repairChangeIsLoading || repairCreateIsLoading || stepCreateIsLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
