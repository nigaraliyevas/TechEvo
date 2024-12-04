import React from "react";
import {  useUpdateOrderStatusMutation } from "../../redux/sercives/orderApi";
import style from "./RecentOrders.module.scss";



const OrderActions = ({ order }) => {
  const [updateOrder] =  useUpdateOrderStatusMutation();

  const handleStatusChange = async (newStatus) => {
    // Konsolda Order obyektini yoxlayın
    console.log("Order obyektinin dəyəri:", order);
  
    // `orderId` mövcudluğunu yoxlayın
    if (!order || !order.orderId) {
      console.error("Order ID mövcud deyil!");
      return;
    }
  
    try {
      const result = await updateOrder({
        orderId: order.orderId, // Düzgün orderId göndərilməlidir
        status: newStatus,
      }).unwrap();
  
      console.log("Cavab:", result);
      alert("Status uğurla dəyişdirildi!");
    } catch (error) {
      console.error("Status dəyişdirilə bilmədi:", error);
      if (error.data) {
        console.error("Backend-dən cavab:", error.data);
      }
    }
  };
  
  

  return (
    <select className={style.status} style={{ backgroundColor:"#222527", color:"#B8BCBF", width:"106px", height:"40px",borderRadius:"6px", border:"none",padding:"8px", cursor:"pointer", }}
    value={order && order.status ? order.status : "Gözləyir"} // Status yoxlanır
    onChange={(e) => handleStatusChange(e.target.value)}
  >
    <option style={{ color: "#B8BCBF" }} value="Gözləyir" >Gözləyir</option>
    <option style={{ color: "green" }} value="Çatdırılıb">Çatdırılıb</option>
    <option style={{ color: "red" }} value="İmtina">İmtina</option>
  </select>
  
  );
};

export default OrderActions;
