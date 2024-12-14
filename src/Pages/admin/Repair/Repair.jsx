import React, { useEffect, useState } from "react";
// styles
import styles from "./Repair.module.scss";
// images
import editIcon from "../../../assets/images/admin/Delivery/edit.svg";
import trashIcon from "../../../assets/images/admin/Delivery/trash.svg";
import addIcon from "../../../assets/images/admin/Repair/add-circle.svg";
import {
  useDeleteRepairHeaderMutation,
  useDeleteRepairMutation,
  useDeleteStepsMutation,
  useGetRepairHeaderQuery,
  useGetRepairQuery,
  useGetRepairStepsQuery,
} from "../../../redux/sercives/serviceApi";
import { useLocation, useNavigate } from "react-router-dom";

const Repair = () => {
  // const [isRepairHeaderEmpty, setIsRepairHeaderEmpty] = useState(true);
  const {
    data: repairHeader,
    isLoading: repairHeaderLoading,
    isError: repairHeaderError,
    refetch: refetchRepairHeader,
  } = useGetRepairHeaderQuery();

  const {
    data: repair,
    isLoading: repairLoading,
    isError: repairError,
    refetch: refetchRepair,
  } = useGetRepairQuery();

  const {
    data: repairSteps,
    isLoading: repairStepsLoading,
    isError: repairStepsError,
    refetch: refetchRepairSteps,
  } = useGetRepairStepsQuery();
  const [deleteRepairHeader] = useDeleteRepairHeaderMutation();
  const [deleteRepair] = useDeleteRepairMutation();
  const [deleteSteps] = useDeleteStepsMutation();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.state?.head ||
      location.state?.header ||
      location.state?.description ||
      location.state?.id
    ) {
      refetchRepairHeader();
      refetchRepair();
      refetchRepairSteps();
    }
  }, [location.state, refetchRepairHeader, refetchRepair, refetchRepairSteps]);
  const handleEditing = (head, header, description) => {
    navigate("/admin/adminServiceDetails", {
      state: { head, header, description },
    });
  };
  const handleEditing2 = (head, header, description, id) => {
    sessionStorage.setItem('method', 'editxidmet');
    navigate("/admin/adminServiceDetails", {
      state: { head, header, description, id},
    });
  };
  
  const handleDelete = async () => {
    try {
      await deleteRepairHeader();
      alert('Ugurla silindi');
      refetchRepairHeader();
    } catch(err) {
      console.log('error bash verdi', err);
    }
  }

  const handleDeleteRepair = async (id) => {
    try {
      await deleteRepair(id);
      alert('Ugurla silindi');
      refetchRepair();
    } catch(err) {
      console.log('error bash verdi', err);
    }
  }

  const handleAdding = (head, header, description) => {
    if(head === "Xidmətlərimiz") {
      sessionStorage.setItem('method', 'addxidmet');
    }
    else if(head === "Necə başlamaq olar?") sessionStorage.setItem('method', 'addstep');
    navigate("/admin/adminServiceDetails", {
      state: {
        head,
        header: header ?? "", // Ensure fallback to an empty string
        description: description ?? "", // Ensure fallback to an empty string
      },
    });
  }

  const handleAddSteps = (head, header, description) => {
    navigate("/admin/adminServiceDetails", {
      state: { head, header, description },
    });
  };

  const handleDeleteSteps = async (id) => {
    try {
      await deleteSteps(id);
      alert('Ugurla silindi');
      refetchRepairSteps();
    } catch(err) {
      console.log('error bash verdi', err);
    }
  }
  return (
    <div className={styles.mainCont}>
      <div className={styles.serviceCont}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "26px",
          }}
        >
          <div style={{ marginBottom: "0px" }} className={styles.serviceHead}>
            Təmir
          </div>
          {!repairHeader || repairHeader.length === 0 ? (
            <div className={styles.serviceSubHeader}>
              <div className={styles.serviceHeadText} onClick={() => handleEditing(
                          "Təmir",
                          "",
                          ""
                        )}>Əlavə et</div>
              <div className={styles.addIconCont}>
                <img src={addIcon} alt="əlavə et iconu" />
              </div>
            </div>
          ) : null}
        </div>
        <table>
          <thead>
            <tr>
              <th className={styles.tHead}>Header</th>
              <th>Təsvir</th>
              <th>Redaktə</th>
            </tr>
          </thead>
          <tbody>
            {/* this tr below must be mapped */}
            {repairHeader ? (
              <tr>
                <td className={styles.colHeader}>{repairHeader?.headerName}</td>
                <td className={styles.colDescription}>
                  {repairHeader?.headerDescription}
                </td>
                <td className={styles.edit}>
                  <div className={styles.imgCont}>
                    <img
                      onClick={() =>
                        handleEditing(
                          "Təmir",
                          repairHeader?.headerName,
                          repairHeader?.headerDescription
                        )
                      }
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                  <div onClick={handleDelete} className={styles.imgCont}>
                    <img src={trashIcon} alt="trash icon" />
                  </div>
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.serviceCont}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "26px",
          }}
        >
          <div style={{ marginBottom: "0px" }} className={styles.serviceHead}>
            Xidmətlərimiz
          </div>
          <div onClick={() => handleAdding("Xidmətlərimiz")} className={styles.serviceSubHeader}>
            <div className={styles.serviceHeadText}>Əlavə et</div>
            <div className={styles.addIconCont}>
              <img src={addIcon} alt="əlavə et iconu" />
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className={styles.tHead}>Header</th>
              <th>Təsvir</th>
              <th>Redaktə</th>
            </tr>
          </thead>
          <tbody>
            {/* this tr below must be mapped */}
            {repair?.map((item, index) => (
              <tr key={index}>
                <td className={styles.colHeader}>{item.serviceName}</td>
                <td className={styles.colDescription}>
                  {item.serviceComponents.toString()}
                </td>
                <td className={styles.edit}>
                  <div className={styles.imgCont}>
                    <img
                      onClick={() => handleEditing2("Xidmətlərimiz", item.serviceName, item.serviceComponents, item.id)}
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                  <div className={styles.imgCont}>
                    <img onClick={() => handleDeleteRepair(item.id)} src={trashIcon} alt="trash icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.serviceCont}>
      <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "26px",
          }}
        >
          <div style={{ marginBottom: "0px" }} className={styles.serviceHead}>
            Necə başlamaq olar?
          </div>
          <div onClick={() => handleAddSteps("Necə başlamaq olar?", "", "")} className={styles.serviceSubHeader}>
            <div className={styles.serviceHeadText}>Əlavə et</div>
            <div className={styles.addIconCont}>
              <img src={addIcon} alt="əlavə et iconu" />
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr
              style={{
                display: "flex",
                gap: "290px",
                justifyContent: "flex-start",
              }}
            >
              <th style={{ width: "110px" }} className={styles.tHead}>
                Header
              </th>
              <th style={{ paddingLeft: "8px" }}>Təsvir</th>
              <th style={{ paddingLeft: "8px" }}>Sıra</th>
              <th>Redaktə</th>
            </tr>
          </thead>
          <tbody>
            {/* this tr below must be mapped */}
            {repairSteps?.map((step, index) => (
              <tr
                key={index}
                style={{
                  justifyContent: "flex-start",
                  gap: "12px",
                  width: "99%",
                }}
              >
                <td
                  style={{
                    minWidth: "372px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className={styles.lastColHeader}
                >
                  {step.stepName}
                </td>
                <td
                  style={{ minWidth: "353px" }}
                  className={styles.lastColDescription}
                >
                  <div
                    style={{
                      width: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {step.stepDescription}
                  </div>
                </td>
                <td style={{ minWidth: "246px" }} className={styles.lastColNum}>
                  {step.stepOrder}
                </td>
                <td
                  style={{ minWidth: "91px", paddingLeft: "36px" }}
                  className={styles.edit}
                >
                  <div style={{ width: "30px" }} className={styles.imgCont}>
                    <img
                      onClick={() => handleEditing("Necə Başlamaq Olar?")}
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                  <div className={styles.imgCont}>
                    <img onClick={() => handleDeleteSteps(step.id)} src={trashIcon} alt="trash icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Repair;
