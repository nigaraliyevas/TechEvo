import React, { useState } from "react";
import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "../../../redux/sercives/orderApi";
import styles from "./AllOrders.module.scss";

const OrdersTable = () => {
  const { data: orders, isLoading, error } = useGetAllOrdersQuery();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  // Sorting state
  const [sortType, setSortType] = useState("");
  const [showSortOptions, setShowSortOptions] = useState(false);

  // Local state for order statuses
  const [orderStatuses, setOrderStatuses] = useState({});

  const handleChangeStatus = async (orderId, newStatus) => {
    try {
      await updateOrderStatus({ orderId, orderStatus: newStatus }).unwrap();
      setOrderStatuses(prevStatuses => ({ ...prevStatuses, [orderId]: newStatus }));
      alert(`Order ${orderId} status updated to ${newStatus}`);
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Error updating status");
    }
  };

  const sortOrders = orders => {
    if (!orders) return [];

    switch (sortType) {
      case "priceAsc":
        return [...orders].sort((a, b) => a.totalPrice - b.totalPrice);
      case "priceDesc":
        return [...orders].sort((a, b) => b.totalPrice - a.totalPrice);
      case "dateAsc":
        return [...orders].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case "dateDesc":
        return [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "productAz":
        return [...orders].sort((a, b) => a.orderItems[0]?.productName.localeCompare(b.orderItems[0]?.productName));
      case "productZa":
        return [...orders].sort((a, b) => b.orderItems[0]?.productName.localeCompare(a.orderItems[0]?.productName));
      default:
        return orders;
    }
  };

  const sortedOrders = sortOrders(orders);

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-between p-1 align-items-center">
        <h2 style={{ fontSize: "24px" }}>Sifarişlər</h2>

        <div className={styles.sortDropdown}>
          <div style={{ textAlign: "end" }}>
            <button onClick={() => setShowSortOptions(!showSortOptions)}>
              Sıralama <img src="/src/assets/images/admin/Dashboard/arrow-down.svg" className="ms-3 p-1" />
            </button>
          </div>
        </div>
        {showSortOptions && (
          <div className={styles.sortOptions}>
            <h6>Sifariş nömrəsi</h6>
            <ul>
              <li onClick={() => setSortType("priceAsc")}>
                <span>&#183; </span>Qiymət (Azdan-çoxa)
              </li>
              <li onClick={() => setSortType("priceDesc")}>
                <span>&#183; </span>Qiymət (Çoxdan-aza)
              </li>
            </ul>
            <h6>Tarix</h6>
            <ul>
              <li onClick={() => setSortType("dateAsc")}>
                <span>&#183; </span>Aşağıdan-yuxarı
              </li>
              <li onClick={() => setSortType("dateDesc")}>
                <span>&#183; </span>Yuxarıdan-aşağı
              </li>
            </ul>
            <h6>Məhsul adı</h6>
            <ul>
              <li onClick={() => setSortType("productAz")}>
                <span>&#183; </span>
                Məhsul adı (A-Z)
              </li>
              <li onClick={() => setSortType("productZa")}>
                <span>&#183; </span>
                Məhsul adı (Z-A)
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Orders Table */}
      <table className={styles.table}>
        <thead>
          <tr id={styles.table_header}>
            <th>Məhsul</th>
            <th>Sifariş nömrəsi</th>
            <th>Tarix</th>
            <th>Qiymət</th>
            <th>Miqdar</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders?.map(order => {
            const currentStatus = orderStatuses[order.orderId] || order.orderStatus;

            return (
              <tr key={order.orderId}>
                <td>
                  {order.orderItems.map(item => (
                    <div key={item.id}>{item.productName}</div>
                  ))}
                </td>
                <td>{order.orderId}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>{order.totalPrice} AZN</td>
                <td>{order.orderItems.reduce((sum, item) => sum + item.quantity, 0)}</td>
                <td>
                  <select
                    value={currentStatus}
                    onChange={e => handleChangeStatus(order.orderId, e.target.value)}
                    style={{
                      color: currentStatus === "Pending" ? "gray" : currentStatus === "Delivered" ? "green" : "red",
                    }}
                  >
                    <option value="Pending" style={{ color: "#B8BCBF" }}>
                      Gözləyir
                    </option>
                    <option value="Delivered" style={{ color: "green" }}>
                      Çatdırılıb
                    </option>
                    <option value="Canceled" style={{ color: "red" }}>
                      İmtina
                    </option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
