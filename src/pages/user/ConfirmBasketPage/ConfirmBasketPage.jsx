import { Col, Row, Modal, Button } from "react-bootstrap";
import styles from "./ConfirmBasketPage.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useGetUserQuery } from "../../../redux/sercives/userApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSubmitOrderMutation } from "../../../redux/sercives/orderApi";

const ConfirmBasketPage = ({ isItems }) => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null);

  const nav = useNavigate();

  const regions = [{ name: "Nəsimi rayonu" }, { name: "Nizami rayonu" }, { name: "Pirallahı rayonu" }, { name: "Xəzər rayonu" }, { name: "Nərimanov rayonu" }, { name: "Binəqədi rayonu" }, { name: "Yasamal rayonu" }, { name: "Suraxanı rayonu" }];

  const { accessToken } = useSelector(state => state.auth);
  // console.log("access" + accessToken);

  const {
    data,
    isError: isGetUserError,
    isLoading: isGetUserLoading,
  } = useGetUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });

  const [submitOrder, { isLoading: isSubmitOrderLoading, isError: isSubmitOrderError, isSuccess }] = useSubmitOrderMutation();

  // State for the address form
  const [address, setAddress] = useState({
    street: "",
    city: "Bakı",
    building: "",
    area: "",
  });

  // Retrieve order items from localStorage
  const orderItems = JSON.parse(localStorage.getItem("basket"))?.map(item => ({
    quantity: item.count,
    price: item.price,
    productId: item.id,
    // productName: item.name,
  }));

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleSubmit = async e => {
    e.preventDefault();

    const orderData = {
      totalPrice: parseInt(localStorage.getItem("total")) || 0,
      deliveryType: "Pulsuz", 
      orderItems: orderItems,
      address: {
        street: address.street || "string",
        city: address.city || "string",
        building: address.building || "string",
        area: address.area || "string",
      },
      userData: {
        phoneNumber: user?.phoneNumber || "string",
        additionalInfo: additionalInfo ? additionalInfo : "",
      },
    };

    try {
      const response = await submitOrder(orderData).unwrap();
      const newOrderId = response;
      setOrderId(newOrderId.orderId);
      if (newOrderId.orderId) {
        setShowModal(true);
        localStorage.removeItem("total");
        localStorage.removeItem("basket");
        localStorage.removeItem("count");
      }
    } catch (error) {
      console.error("Failed to submit order:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (isItems == false) {
    nav("/");
    return null;
  }

  return (
    <div>
      <section className={styles.confirmation}>
        <div className="container">
          <div className={styles.confirmation_area}>
            <div className={styles.confirmation_box}>
              <div className={styles.confirmation_content}>
                <form onSubmit={handleSubmit} className={styles.confirmation_form}>
                  <h2 className={styles.confirmation_header}>Səbəti təsdiqlə</h2>
                  <Row>
                    <Col lg={12}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Email</label>
                        <input placeholder="Email" value={user && user.email} type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} required />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Ad</label>
                        <input placeholder="Ad" value={user && user.firstName} type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} required />
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Şəhər</label>
                        <select className={styles.confirmation_select} onChange={e => setAddress({ ...address, city: e.target.value })} required>
                          <option value="Bakı" selected>
                            Bakı
                          </option>
                        </select>
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Küçə</label>
                        <input placeholder="Küçə" type="text" className={styles.confirmation_input} onChange={e => setAddress({ ...address, street: e.target.value })} required />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Soyad</label>
                        <input placeholder="Soyad" value={user && user.lastName} type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} required />
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Məntəqə</label>
                        <select className={styles.confirmation_select} onChange={e => setAddress({ ...address, area: e.target.value })} required>
                          <option value="" disabled selected>
                            Məntəqə
                          </option>
                          {regions.map((region, index) => (
                            <option key={index} value={region.name}>
                              {region.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Mənzil</label>
                        <input placeholder="Mənzil" type="text" className={styles.confirmation_input} onChange={e => setAddress({ ...address, building: e.target.value })} required />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className={styles.confirmation_form_box}>
                        <p className={styles.confirmation_title}>Kuryer üçün əlavə məlumat</p>
                        <textarea onChange={e => setAdditionalInfo(e.target.value)} className={styles.confirmation_textarea} />
                        <p className={styles.confirmation_title}>*çatdırılma müddəti: sifariş hazırlandıqdan sonra 1-3 iş günü ərzində</p>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className={styles.confirmation_btn_area}>
                        <button type="submit" className={styles.confirmation_button}>
                          Sifarişi təsdiqlə
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ background: "#161A1E", color: "white", borderBottom: "none" }}></Modal.Header>
        <Modal.Body style={{ background: "#161A1E", color: "white", textAlign: "center" }}>
          <Modal.Title>Sifariş üçün təşəkkür edirik!</Modal.Title>
          <p>Sizə yenidən xidmət etməyi səbirsizliklə gözləyirik!</p>
          <p
            style={{
              padding: "10px 20px",
              border: "1px solid transparent",
              borderImageSource: "linear-gradient(120.61deg, #FD3C43 -10.5%, #B622DC 38.25%, #3F27EB 80.92%)",
              borderImageSlice: 1,
            }}
          >
            <strong>Sizin sifariş nömrəniz:</strong> {orderId}
          </p>
          <p>Operatorumuz qısa müddətdə sizinlə əlaqə saxlayacaq.</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConfirmBasketPage;
