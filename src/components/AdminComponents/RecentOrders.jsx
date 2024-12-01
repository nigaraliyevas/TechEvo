import React from "react";
import { useGetAllOrdersQuery } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
//import OrderDeleteButton from "./OrderDeleteButton";
import style from "./RecentOrders.module.scss";

const RecentOrders = () => {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery();

  if (isLoading) return <p>Yüklənir...</p>;
  if (isError) return <p>Bir xəta baş verdi!</p>;

  console.log("Order Data:", orders);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Son Sifarişlər</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Məhsul</th>
                <th>Sifariş nömrəsi</th>
                <th>Tarix</th>
                <th>Qiymət</th>
                <th>Miqdar</th>
                <th>Status</th>
                {/* <th>Əməliyyatlar</th> */}
              </tr>
            </thead>
            <tbody>
              {orders && orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.orderId}>
                    {/* Məhsul */}
                    <td>
                      {order.orderItems && order.orderItems.length > 0 ? (
                        <div
                          className={style.productNames}
                          title={order.orderItems.map((item) => item.productName).join(", ")}
                        >
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
                      {order.orderItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </td>
                    {/* Status */}
                    <td>  <OrderActions order={order} /></td>
                  
                    {/* <td>
                      <OrderDeleteButton orderId={order.orderId} />
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">Heç bir sifariş tapılmadı</td>
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
