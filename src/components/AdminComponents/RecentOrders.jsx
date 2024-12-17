import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllOrdersQuery, useUpdateStatusOrderMutation } from "../../redux/sercives/orderApi";
import styles from "./RecentOrders.module.scss";

const RecentOrders = () => {
  const { data: orders = [], isLoading, error } = useGetAllOrdersQuery();
  const [updateStatusOrder] = useUpdateStatusOrderMutation();
  const [orderStatuses, setOrderStatuses] = useState({});
  const navigate = useNavigate();

  const handleChangeStatus = async (orderId, newStatus) => {
    try {
      await updateStatusOrder({ orderId, orderStatus: newStatus }).unwrap();
      setOrderStatuses((prevStatuses) => ({
        ...prevStatuses,
        [orderId]: newStatus,
      }));
      alert(`Order ${orderId} status updated to ${newStatus}`);
    } catch (err) {
      alert("Error updating status");
    }
  };

  const handleRowClick = (orderId) => {
    navigate(`/admin/detail/${orderId}`);
  };

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders. Please try again later.</p>;

  return (
    <div className="col-12">
      <div className={`card ${styles.card}`}>
        <div className={styles.card_body}>
          <h5
            className="card-title"
            style={{
              paddingLeft: "24px",
              paddingTop: "20px",
              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            Son Sifarişlər
          </h5>
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
              {orders.map((order) => {
                const currentStatus =
                  orderStatuses[order.orderId] || order.orderStatus;

                return (
                  <tr key={order.orderId}>
                    <td
                      style={{ cursor: "pointer", width: "320px" }}
                      onClick={() => handleRowClick(order.orderId)}
                    >
                      {order.orderItems && order.orderItems.length > 0 ? (
                        <div
                          className={styles.productNames}
                          style={{
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "320px",
                          }}
                          title={order.orderItems
                            .map((item) => item.productName)
                            .join(", ")}
                        >
                          {order.orderItems
                            .map((item) => item.productName)
                            .join(", ")}
                        </div>
                      ) : (
                        "Məhsul yoxdur"
                      )}
                    </td>
                    <td>{order.orderId}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>{order.totalPrice} AZN</td>
                    <td>
                      {order.orderItems.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                      )}
                    </td>
                    <td>
                      <select
                        value={currentStatus}
                        onChange={(e) =>
                          handleChangeStatus(order.orderId, e.target.value)
                        }
                        style={{
                          color:
                            currentStatus === "Pending"
                              ? "gray"
                              : currentStatus === "Delivered"
                              ? "green"
                              : "red",
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
      </div>
    </div>
  );
};

export default RecentOrders;
