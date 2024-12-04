import React, { useState } from "react";
import { useUpdateOrderStatusMutation } from "../../redux/sercives/orderApi";
import styles from "./RecentOrders.module.scss";
import { FaChevronDown } from 'react-icons/fa'; // FontAwesome icon istifadə edəcəyik
import style from "./OrderActions.module.scss";

const OrderActions = ({ order }) => {
  const [updateOrder] = useUpdateOrderStatusMutation();
  const [status, setStatus] = useState(order?.status || "Gözləyir");

  const handleStatusChange = async (newStatus) => {
    if (!order || !order.orderId) {
      console.error("Order ID mövcud deyil!");
      return;
    }

    try {
      const result = await updateOrder({
        orderId: order.orderId, 
        status: newStatus,
      }).unwrap();
      alert("Status uğurla dəyişdirildi!");
      setStatus(newStatus);
    } catch (error) {
      console.error("Status dəyişdirilə bilmədi:", error);
      if (error.data) {
        console.error("Backend-dən cavab:", error.data);
      }
    }
  };

  const getStatusColor = (status) => {
    if (status === "Çatdırılıb") return "green";
    if (status === "İmtina") return "red";
    return "#B8BCBF"; // default color for "Gözləyir"
  };

  return (
    <div className={style.selectContainer}>
      <select
        className={styles.status}
        style={{
          width: "106px",
          height: "40px",
          borderRadius: "6px",
          border: "none",
          padding: "8px",
          cursor: "pointer",
          backgroundColor: "#222527", 
          color: getStatusColor(status),
          appearance: "none", 
          WebkitAppearance: "none", 
          MozAppearance: "none", 
          paddingRight: "30px", // Ensuring enough space for the arrow
        }}
        value={status} 
        onChange={(e) => handleStatusChange(e.target.value)}
      >
        <option style={{ color: "#B8BCBF" }} value="Gözləyir">Gözləyir</option>
        <option style={{ color: "green" }} value="Çatdırılıb">Çatdırılıb</option>
        <option style={{ color: "red" }} value="İmtina">İmtina</option>
      </select>
      
      {/* Yeni əlavə olunan ox iconu */}
      <span className={style.iconWrapper}>
        <FaChevronDown style={{ color: "#BFBFBF", fontSize: "14px" }} />
      </span>
    </div>
  );
};

export default OrderActions;
