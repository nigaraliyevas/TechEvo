import React from "react";
import { useGetAllOrdersQuery } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import style from "./RecentOrders.module.scss";

const RecentOrders = () => {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery();
  console.log('Orders:', orders); // Orders məlumatını konsolda yoxlayın


if (isLoading) return <p>Yüklənir...</p>;
if (isError && isError?.status === 401) {
  console.warn("Token expired. Redirecting to login...");
  navigate("/login");
}

  

 


  return (
    <div className="col-12">
      <div className={`card ${style.card}`}>
        <div className="card-body">
          <h5 className="card-title">Son Sifarişlər</h5>
          <table style={{ width: "100%", backgroundColor: "#161A1E", color: "#CCCCCC", fontSize: "16px", lineHeight: "28px" }}>
            <thead>
              <tr style={{ marginBottom: "10px" }}>
                <th>Məhsul</th>
                <th>Sifariş nömrəsi</th>
                <th>Tarix</th>
                <th>Qiymət</th>
                <th>Miqdar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.orderId}>
                    {/* Məhsul */}
                    <td>
                      {order.orderItems && order.orderItems.length > 0 ? (
                        <div className={style.productNames} title={order.orderItems.map((item) => item.productName).join(", ")}>
                          {order.orderItems.map((item) => item.productName).join(", ")}
                        </div>
                      ) : (
                        <p>Heç bir məhsul yoxdur</p>
                      )}
                    </td>

                    {/* Sifariş nömrəsi */}
                    <td>{order.orderId}</td>

                    {/* Tarix */}
                    <td>{`${order.day}-${order.month}-${order.year}`}</td>

                    {/* Qiymət */}
                    <td>{order.totalPrice} AZN</td>

                    {/* Miqdar */}
                    <td>
                      {order.orderItems.reduce((total, item) => total + item.quantity, 0)}
                    </td>

                    {/* Status */}
                    <td>
                      <OrderActions order={order} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Heç bir sifariş tapılmadı</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
