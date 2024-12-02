import React from "react";
import {  useUpdateOrderStatusMutation } from "../../redux/sercives/orderApi";

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
    <select
    value={order && order.status ? order.status : "Gözləyir"} // Status yoxlanır
    onChange={(e) => handleStatusChange(e.target.value)}
  >
    <option value="Gözləyir">Gözləyir</option>
    <option value="Çatdırılıb">Çatdırılıb</option>
    <option value="İmtina">İmtina</option>
  </select>
  
  );
};

export default OrderActions;
