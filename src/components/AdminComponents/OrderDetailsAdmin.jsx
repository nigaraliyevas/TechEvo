import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// URL-dən parametrləri oxumaq üçün
import {
    useGetAllOrdersQuery,
    useDeleteOrderItemMutation,
} from "../../redux/sercives/orderApi";
import OrderActions from "./OrderActions";
import { FiTrash } from "react-icons/fi";
import styles from "./OrderDetails.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";

const OrderDetails = () => {
    const { data: orders, isLoading, error } = useGetAllOrdersQuery();
    console.log('Orders:', orders);  // API cavabını konsolda yoxlayın


    const [deleteOrderItem] = useDeleteOrderItemMutation();
    const { orderId } = useParams();
    console.log("OrderId from URL:", orderId);  // Burada orderId düzgün göstərilməlidir.


    const [selectedOrder, setSelectedOrder] = useState(null);
    console.log('Selected Order:', selectedOrder);


    // Sifarişləri tapmaq üçün effekt
    useEffect(() => {
        if (orders && orderId) {
            console.log("Looking for orderId:", orderId);
            const order = orders.find(order => order.orderId === parseInt(orderId, 10));
            // console.log("Orders after parseInt:", orders.map(order => order.orderId));  // Burada orderId-ləri yoxlayaq

            if (order) {
                console.log("Order found:", order);  // Burada order tapılmalıdır
                setSelectedOrder(order);
            } else {
                console.log("Order not found for orderId:", orderId);  // Burada order tapılmadığını görməlisiniz
            }
        }
    }, [orders, orderId]);
    



    // Yükləmə, xəta və ya tapılmama vəziyyətləri
    if (isLoading) return <p>Yüklənir...</p>;
    if (error) return <p>Xəta baş verdi: {error.message}</p>;
    if (!selectedOrder) return <p>Bu sifariş tapılmadı.</p>;

    // Məhsulu silmə funksiyası
    const handleItemDeleted = async (orderId, orderItemId) => {
        try {
            await deleteOrderItem({ orderId, orderItemId }).unwrap();

            // Silinən məhsulu UI-dən çıxarırıq
            setSelectedOrder((prevOrder) => ({
                ...prevOrder,
                orderItems: prevOrder.orderItems.filter(
                    (item) => item.id !== orderItemId
                ),
            }));

            alert("Məhsul uğurla silindi!");
        } catch (error) {
            console.error("Məhsul silinə bilmədi:", error);
            alert("Məhsul silinərkən xəta baş verdi.");
        }
    };

    return (
        <div className={styles.orderContainer}>
            <div className={styles.orderDetails}>
                <div key={selectedOrder.orderId} className={styles.orderCard}>
                    {/* Sifariş Başlığı */}
                    <div className={styles.orderHeader}>
                        <div className={styles.orderHeaderLeft}>
                            <h3>Sifariş #{selectedOrder.orderId}</h3>
                            <p>
                                <strong>Tarix:</strong>{" "}
                                {new Date(selectedOrder.createdAt).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Ümumi qiymət:</strong> {selectedOrder.totalPrice} AZN
                            </p>
                        </div>
                        <div className={styles.orderHeaderRight}>
                            <p>Status: {selectedOrder.status}</p>
                            <OrderActions order={selectedOrder} />
                        </div>
                    </div>

                    {/* Yeni Buton */}
                    <div className={styles.addButtonContainer}>
                        <button className={styles.addButton}>
                            <span
                                style={{
                                    marginRight: "8px",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                }}
                            >
                                Əlavə et
                            </span>{" "}
                            <IoMdAddCircleOutline size={24} />
                        </button>
                    </div>

                    {/* Müştəri Məlumatları */}
                    <div className={styles.orderGridContainer}>
                        <div className={styles.userOrder}>
                            <div className={styles.userDetails}>
                                <h4>Müştəri məlumatları</h4>
                                <p>Ad: {selectedOrder.userData.name}</p>
                                <p>Soyad: {selectedOrder.userData.surname}</p>
                                <p>Email: {selectedOrder.userEmail}</p>
                                <p>
                                    Çatdırılma ünvanı: {selectedOrder.address.city},{" "}
                                    {selectedOrder.address.area},{" "}
                                    {selectedOrder.address.street},{" "}
                                    {selectedOrder.address.building}
                                </p>
                            </div>
                        </div>

                        {/* Məhsul Siyahısı */}
                        <div className={styles.orderItems}>
                            {selectedOrder.orderItems.map((item, index) => (
                                <div key={item.id} className={styles.orderItem}>
                                    <div className={styles.itemDetails}>
                                        <div className={styles.infoDelete}>
                                            <h4 className={styles.productHeader}>
                                                Məhsul məlumatları №{index + 1}
                                            </h4>
                                            <FiTrash
                                                style={{ color: "red", cursor: "pointer" }}
                                                className={styles.deleteButton}
                                                onClick={() =>
                                                    handleItemDeleted(
                                                        selectedOrder.orderId,
                                                        item.id
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className={styles.productDetails}>
                                            <p>Məhsul adı: {item.productName}</p>
                                            <p>Miqdar: {item.quantity}</p>
                                            <p>Qiymət: {item.price} AZN</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
