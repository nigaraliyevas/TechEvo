import React from "react";
import { useGetAllOrdersQuery, useDeleteOrderMutation } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import { FiTrash } from "react-icons/fi";
import styles from "./OrderDetails.module.scss";

const OrderDetails = () => {
    const { data: orders, isLoading, error } = useGetAllOrdersQuery();
    const [deleteOrder] = useDeleteOrderMutation();

    const handleDeleteOrder = async (orderId) => {
        if (window.confirm("Sifarişi silmək istədiyinizdən əminsiniz?")) {
            try {
                await deleteOrder(orderId).unwrap();
                alert("Sifariş uğurla silindi!");
            } catch (error) {
                console.error("Sifariş silinə bilmədi:", error);
            }
        }
    };

    if (isLoading) return <p>Yüklənir...</p>;
    if (error) return <p>Xəta baş verdi: {error.message}</p>;

    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderDetails}>
                {orders.map((order) => (
                    <div key={order.orderId} className={styles.orderCard}>
                        <div className={styles.orderHeader}>
                            <div className={styles.orderHeaderLeft}>
                                <h3>Sifariş #{order.orderId}</h3>
                                <p>
                                    <strong>Tarix:</strong> {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                                <p>
                                    <strong>Ümumi qiymət:</strong> {order.totalPrice} AZN
                                </p>
                            </div>
                            <div className={styles.orderHeaderRight}>
                                <p>
                                    Status:{order.status}
                                </p>
                                <OrderActions order={order} />
                            </div>
                        </div>

                        {/* Müştəri Məlumatları */}
                        <div className={styles.userOrder}>
                            <div className={styles.userDetails}>
                                <h4>Müştəri məlumatları</h4>
                                <p>Ad: {order.userData.name}</p>
                                <p>Soyad: {order.userData.surname}</p>
                                <p>Email: {order.userEmail}</p>
                                <p>
                                    Çatdırılma ünvanı: {order.address.city}, {order.address.area}, {order.address.street}, {order.address.building}
                                </p>
                            </div>
                        </div>

                        {/* Məhsul Siyahısı */}
                        <div className={styles.orderItems}>
                            {order.orderItems.map((item, index) => (
                                <div key={item.id} className={styles.orderItem}>
                                    <div className={styles.itemDetails}>
                                        <div className={styles.infoDelete}>
                                            <h4 className={styles.productHeader}>Məhsul məlumatları №{index + 1}</h4>
                                            <FiTrash
                                                style={{ color: "red", cursor: "pointer" }}
                                                className={styles.deleteButton}
                                                onClick={() => handleDeleteOrder(item.id)}
                                            />
                                        </div>
                                        <div className={styles.productDetails}>
                                            <p>Məhsul adı:{item.productName}</p>
                                            <p>Miqdar:{item.quantity}</p>
                                            <p>Qiymət:{item.price} AZN</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
