import React from "react";
import { useDeleteOrderItemMutation } from "../../redux/sercives/orderApi";

const OrderDeleteButton = ({ orderId, orderItemId, onDeleted }) => {
  const [deleteOrderItem] = useDeleteOrderItemMutation();

  const handleDelete = async () => {
    if (window.confirm("Məhsulu sifarişdən silmək istədiyinizdən əminsiniz?")) {
      try {
        await deleteOrderItem({ orderId, orderItemId }).unwrap();
        alert("Məhsul sifarişdən uğurla silindi!");
        if (onDeleted) {
          onDeleted(orderItemId); // Məhsul silindikdən sonra vəziyyəti yeniləyirik
        }
      } catch (error) {
        console.error("Məhsul silinə bilmədi:", error);
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
