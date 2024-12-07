
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
          <table
            style={{
              //width: "100%",
              backgroundColor: "#161A1E",
              color: "#CCCCCC",
              fontSize: "16px",
              lineHeight: "28px",
              height: "340px !important",
              borderCollapse: "separate",
              borderSpacing: "43px 0px",
            }}
          >
            <thead>
              <tr style={{ height: "64px" }}> 
                <th style={{ paddingBottom: "10px" }}>Məhsul</th> 
                <th style={{ paddingBottom: "10px" }}>Sifariş nömrəsi</th>
                <th style={{ paddingBottom: "10px" }}>Tarix</th>
                <th style={{ paddingBottom: "10px" }}>Qiymət</th>
                <th style={{ paddingBottom: "10px" }}>Miqdar</th>
                <th style={{ paddingBottom: "10px" }}>Status</th>
              </tr>
              {/* <hr></hr> */}
            </thead>
          

            <tbody>
              {orders && orders.length > 0 ? (
                orders.map((order, index) => (
                  <React.Fragment key={order.orderId}>
                    
                    <tr
                      style={{
                        height: "64px",
                      }}
                    >
                      {/* Məhsul */}
                      <td style={{ width: "320px" }}>
                        
                        {order.orderItems && order.orderItems.length > 0 ? (
                          <div
                            className={style.productNames} style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "320px",marginRight: "130px" }}
                            title={order.orderItems.map((item) => item.productName).join(", ")}
                          >
                            {order.orderItems.map((item) => item.productName).join(", ")}
                          </div>
                        ) : (
                          <p>Heç bir məhsul yoxdur</p>
                        )}
                      </td>

                      {/* Sifariş nömrəsi */}
                      <td style={{ width: "140px" }}>{order.orderId}</td>

                      {/* Tarix */}
                      <td style={{ width: "110px" }}>
                        {new Date(order.createdAt).toLocaleDateString("az-AZ", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </td>

                      {/* Qiymət */}
                      <td style={{ width: "120px" }}>{order.totalPrice} AZN</td>

                      {/* Miqdar */}
                      <td style={{ width: "65px" }}>{order.orderItems.reduce((total, item) => total + item.quantity, 0)}</td>

                      {/* Status */}
                      <td>
                        <OrderActions order={order} />
                      </td>
                    </tr>

                    {/* Yalnız son sətirdən sonra `hr` əlavə etməmək üçün */}
                    {index !== orders.length - 1 && (
                      <tr>
                        <td colSpan="6">
                          <hr
                            style={{
                              border: "none",
                              borderTop: "1px solid #CCCCCC",
                              margin: "5px 0",
                            }}
                          />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                    Heç bir sifariş tapılmadı
                  </td>
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
