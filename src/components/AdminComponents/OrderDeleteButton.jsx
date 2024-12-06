import React from "react";
import { useDeleteOrderMutation } from "../../redux/sercives/orderApi";

const OrderDeleteButton = ({ orderId }) => {
  const [deleteOrder] = useDeleteOrderMutation();

  const handleDelete = async () => {
    if (window.confirm("Sifarişi silmək istədiyinizdən əminsiniz?")) {
      try {
        await deleteOrder(orderId).unwrap();
        alert("Sifariş uğurla silindi!");
      } catch (error) {
        console.error("Sifariş silinə bilmədi:", error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">
      Sil
    </button>
  );
};

export default OrderDeleteButton;
