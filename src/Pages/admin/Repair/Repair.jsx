import React from "react";
// styles
import styles from "./Repair.module.scss";
// images
import editIcon from "../../../assets/images/admin/Delivery/edit.svg";
import trashIcon from "../../../assets/images/admin/Delivery/trash.svg";
import addIcon from "../../../assets/images/admin/Repair/add-circle.svg";
import {
  useGetRepairHeaderQuery,
  useGetRepairQuery,
  useGetRepairStepsQuery,
} from "../../../redux/sercives/serviceApi";
import { useNavigate } from "react-router-dom";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Repair = () => {
  const {
    data: repairHeader,
    isLoading: repairHeaderLoading,
    isError: repairHeaderError,
  } = useGetRepairHeaderQuery();

  const {
    data: repair,
    isLoading: repairLoading,
    isError: repairError,
  } = useGetRepairQuery();

  const {
    data: repairSteps,
    isLoading: repairStepsLoading,
    isError: repairStepsError,
  } = useGetRepairStepsQuery();
  const navigate = useNavigate();

  const handleEditing = (head, header, description) => {
    navigate('/admin/adminServiceDetails', { state: { head, header,description } });
  };
  return (
    <div className={styles.mainCont}>
      <div className={styles.serviceCont}>
        <div className={styles.serviceHead}>Təmir</div>
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
            <tr>
              <td className={styles.colHeader}>{repairHeader?.headerName}</td>
              <td className={styles.colDescription}>
                {repairHeader?.headerDescription}
              </td>
              <td className={styles.edit}>
                <div className={styles.imgCont}>
                  <img onClick={() => handleEditing('Təmir', repairHeader?.headerName, repairHeader?.headerDescription)} src={editIcon} alt="edit icon" />
                </div>
                <div className={styles.imgCont}>
                  <img src={trashIcon} alt="trash icon" />
                </div>
              </td>
            </tr>
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
          <div className={styles.serviceSubHeader}>
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
                      onClick={() => handleEditing('Xidmətlərimiz')}
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                  <div className={styles.imgCont}>
                    <img src={trashIcon} alt="trash icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.serviceCont}>
        <div className={styles.serviceHead}>Necə Başlamaq Olar?</div>
        <table>
          <thead>
            <tr style={{ display: "flex", gap: "290px", justifyContent: "flex-start" }}>
              <th style={{ width: "110px" }} className={styles.tHead}>
                Header
              </th>
              <th style={{paddingLeft: "8px"}}>Təsvir</th>
              <th style={{paddingLeft: "8px"}}>Sıra</th>
              <th>Redaktə</th>
            </tr>
          </thead>
          <tbody>
            {/* this tr below must be mapped */}
            {repairSteps?.map((step, index) => (
              <tr key={index} style={{ justifyContent: "flex-start", gap: "12px", width: "99%" }}>
                <td style={{minWidth: "372px", whiteSpace: "nowrap", overflow: "hidden",
                      textOverflow: "ellipsis",}} className={styles.lastColHeader}>
                  {step.stepName}
                </td>
                <td style={{minWidth: "353px"}} className={styles.lastColDescription}>
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
                <td style={{minWidth: "246px"}} className={styles.lastColNum}>{step.stepOrder}</td>
                <td style={{minWidth: "91px", paddingLeft: "36px"}} className={styles.edit}>
                  <div style={{width: "30px"}} className={styles.imgCont} >
                    <img
                      onClick={() => handleEditing('Necə Başlamaq Olar?')}
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                  <div className={styles.imgCont}>
                    <img src={trashIcon} alt="trash icon" />
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
