import React from "react";
import { useGetAllOrdersQuery } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import OrderDeleteButton from "./OrderDeleteButton";
import styles from "./OrderDetails.module.scss";
import { FiTrash } from "react-icons/fi"; // İkona kitabxanasını import edin

const OrderDetails = () => {
    const { data: orders, isLoading, error } = useGetAllOrdersQuery();

    if (isLoading) return <p>Yüklənir...</p>;
    if (error) return <p>Xəta baş verdi: {error.message}</p>;

    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderDetails}>
                {orders.map((order) => (
                    <div key={order.orderId} className={styles.orderCard}>

                        <div className={styles.orderHeader}>
                            <h3>Sifariş #{order.orderId}</h3>
                            <p>
                                <strong>Tarix:</strong> {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Ümumi qiymət:</strong> {order.totalPrice} AZN
                            </p>
                            <OrderActions order={order} />
                        </div>

                        <div className={styles.userOrder}>
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
                                    <strong>Çatdırılma ünvanı:</strong>{" "}
                                    {order.address.city}, {order.address.street}, {order.address.building}, {order.address.area}
                                </p>
                            </div>

                            <div className={styles.orderItems}>

                                {order.orderItems.map((item) => (
                                    <div key={item.id} className={styles.orderItem}>
                                        <div className={styles.infoDelete}>
                                            <h4>Məhsullar Məlumatı</h4>
                                           
                                            <FiTrash
                                                style={{ color: "red", cursor: "pointer" }}
                                                className={styles.deleteButton}
                                                onClick={() => {
                                                    OrderDeleteButton(item.id);
                                                }}
                                               
                                            >

                                            </FiTrash>
                                        </div>
                                        <div className={styles.itemDetails}>
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

                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
