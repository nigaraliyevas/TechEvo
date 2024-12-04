import React from "react";
import { useGetAllOrdersQuery } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import style from "./RecentOrders.module.scss";

const RecentOrders = () => {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery();

  if (isLoading) return <p>Yüklənir...</p>;
  if (isError) return <p>Səhv baş verdi. Xahiş edirik sonra yenidən cəhd edin.</p>;

  return (
    <div className="col-12">
      <div className={`card ${style.card}`}>
        <div className="card-body">
          <h5 className="card-title">Son Sifarişlər</h5>
          <table
            style={{
              width: "100%",
              backgroundColor: "#161A1E",
              color: "#CCCCCC",
              fontSize: "16px",
              lineHeight: "28px",
              height: "340px !important",
             

            }}
          >
            <thead>
              <tr style={{height:"64px"}}>
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
                  <tr key={order.orderId} style={{height:"64px",borderBottom:"1px solid #333"}}>
                    {/* Məhsul */}
                    <td>
                      {order.orderItems && order.orderItems.length > 0 ? (
                        <div
                          className={style.productNames}
                          title={order.orderItems
                            .map((item) => item.productName)
                            .join(", ")}
                        >
                          {order.orderItems
                            .map((item) => item.productName)
                            .join(", ")}
                        </div>
                      ) : (
                        <p>Heç bir məhsul yoxdur</p>
                      )}
                    </td>

                    {/* Sifariş nömrəsi */}
                    <td>{order.orderId}</td>

                    {/* Tarix */}
                    <td>
                      {new Date(order.createdAt).toLocaleDateString("az-AZ", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </td>

                    {/* Qiymət */}
                    <td>{order.totalPrice} AZN</td>

                    {/* Miqdar */}
                    <td>
                      {order.orderItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </td>

                    {/* Status */}
                    <td>
                      <OrderActions order={order} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{height:"64px"}}>
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
