import React from "react";
import { useGetAllOrdersQuery, useDeleteOrderItemMutation } from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import { FiTrash } from "react-icons/fi";
import styles from "./OrderDetails.module.scss";
import { useState, useEffect } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const OrderDetails = () => {
    const { data: orders, isLoading, error } = useGetAllOrdersQuery();
    const [deleteOrderItem] = useDeleteOrderItemMutation(); // API mutation hook
    const [updatedOrders, setUpdatedOrders] = useState([]);

    useEffect(() => {
        if (orders) {
            setUpdatedOrders(orders);
        }
    }, [orders]);

    const handleItemDeleted = async (orderId, orderItemId) => {
        try {
            // Backend-də məhsulu silirik
            await deleteOrderItem({ orderId, orderItemId }).unwrap();

            // UI-də də məhsulu silirik
            setUpdatedOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.orderId === orderId
                        ? {
                            ...order,
                            orderItems: order.orderItems.filter((item) => item.id !== orderItemId),
                        }
                        : order
                )
            );

            alert("Məhsul uğurla silindi!"); // Silmə əməliyyatının uğurlu olduğunu bildiririk
        } catch (error) {
            console.error("Məhsul silinə bilmədi:", error);
            alert("Məhsul silinərkən xəta baş verdi.");
        }
    };

    if (isLoading) return <p>Yüklənir...</p>;
    if (error) return <p>Xəta baş verdi: {error.message}</p>;

    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderDetails}>
                {updatedOrders.map((order) => (
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
                         {/* Yeni Buton */}
                         <div className={styles.addButtonContainer}>
                            <button className={styles.addButton}>
                                <span style={{marginRight: "8px",fontSize: "18px",fontWeight: "700"}}>Əlavə et</span> <IoMdAddCircleOutline size={24} />
                            </button>
                        </div>

                        {/* Müştəri Məlumatları */}
                        <div className={styles.orderGridContainer}>
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
                                                    onClick={() =>
                                                        handleItemDeleted(order.orderId, item.id)
                                                    }
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
