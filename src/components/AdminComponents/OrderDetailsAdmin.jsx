import React from "react";
import { useGetAllOrdersQuery } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import OrderDeleteButton from "./OrderDeleteButton";
import styles from "./OrderDetails.module.scss";

const OrderDetails = () => {
    const { data: orders, isLoading, error } = useGetAllOrdersQuery();

    if (isLoading) return <p>Yüklənir...</p>;
    if (error) return <p>Xəta baş verdi: {error.message}</p>;

    return (
        <div className={styles.orderDetails}>
            {orders.map((order) => (
                <div key={order.orderId} className={styles.orderCard}>
                    {/* Sifariş başlıq məlumatları */}
                    <div className={styles.orderHeader}>
                        <h3>Sifariş #{order.orderId}</h3>
                        <p>
                            <strong>Tarix:</strong>{" "}
                            {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                        <p>
                            <strong>Ümumi qiymət:</strong> {order.totalPrice} AZN
                        </p>

                        {/* Status dəyişdirmək üçün OrderActions */}
                        <OrderActions order={order} />

                        {/* Silmək düyməsi */}
                        <OrderDeleteButton orderId={order.orderId} />
                    </div>

                    {/* Müştəri məlumatları */}
                    <div className={styles.userDetails}>
                        <h4>Müştəri məlumatları</h4>
                        <p>
                            <strong>Ad:</strong> {order.userData.name}
                        </p>
                        <p>
                            <strong>Soyad:</strong> {order.userData.surname}
                        </p>
                        <p>
                            <strong>Email:</strong> {order.userEmail}
                        </p>
                        <p>
                            <strong>Əlaqə nömrəsi:</strong> {order.userData.phoneNumber}
                        </p>
                        <p>
                            <strong>Əlavə məlumat:</strong> {order.userData.additionalInfo}
                            <p>
                                {/* Ünvan məlumatları */}
                                <strong>Çatdırılma ünvanı:</strong> {order.address.city}.{order.address.street},{order.address.building},{order.address.area}
                            </p>
                        </p>

                    </div>




                    {/* Sifariş məhsulları */}
                    <div className={styles.orderItems}>
                        <h4>Məhsullar:</h4>
                        {order.orderItems.map((item) => (
                            <div key={item.id} className={styles.orderItem}>
                                <p>
                                    <strong>Məhsul adı:</strong> {item.productName}
                                </p>
                                <p>
                                    <strong>Miqdar:</strong> {item.quantity}
                                </p>
                                <p>
                                    <strong>Qiymət:</strong> {item.price} AZN
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderDetails;
