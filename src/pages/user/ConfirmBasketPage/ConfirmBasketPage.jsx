import { Col, Row, Modal, Button } from "react-bootstrap";
import styles from "./ConfirmBasketPage.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useGetUserQuery } from "../../../redux/sercives/userApi";
import { useSelector } from "react-redux";

const ConfirmBasketPage = ({ isItems }) => {
  // const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const regions = [{ name: "Nəsimi rayonu" }, { name: "Nizami rayonu" }, { name: "Pirallahı rayonu" }, { name: "Xəzər rayonu" }, { name: "Nərimanov rayonu" }, { name: "Xəzər rayonu" }, { name: "Binəqədi rayonu" }, { name: "Yasamal rayonu" }, { name: "Suraxanı rayonu" }];

  const { accessToken } = useSelector(state => state.auth);
  console.log("access" + accessToken);
  const { data, isError, isLoading } = useGetUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });

  const handleSubmit = e => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load user data</p>;
  return (
    <div>
      <section className={styles.confirmation}>
        <div className="container">
          <div className={styles.confirmation_area}>
            <div className={styles.confirmation_box}>
              <div className={styles.confirmation_content}>
                <form onSubmit={handleSubmit} action="" className={styles.confirmation_form} method="post">
                  <h2 className={styles.confirmation_header}>Səbəti təsdiqlə</h2>
                  <Row>
                    <Col lg={12}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Email</label>
                        <input placeholder="Email" value={user ? user.email : ""} type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Ad</label>
                        <input placeholder="Ad" value={user ? user.firstName : ""} type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} />
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Şəhər</label>
                        <select name="" id="" className={styles.confirmation_select}>
                          <option className={styles.confirmation_option} value="" default>
                            Bakı
                          </option>
                        </select>
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Küçə</label>
                        <input placeholder="Küçə" type="text" className={styles.confirmation_input} />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Soyad</label>
                        <input placeholder="Soyad" value={user ? user.lastName : ""} type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} />
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Məntəqə</label>
                        <select name="" id="" className={styles.confirmation_select}>
                          <option value="" disabled selected>
                            Məntəqə
                          </option>
                          {regions.map((region, index) => (
                            <option className={styles.confirmation_option} key={index} value={region.name}>
                              {region.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Mənzil</label>
                        <input placeholder="Mənzil" type="text" className={styles.confirmation_input} />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className={styles.confirmation_form_box}>
                        <p className={styles.confirmation_title}>Kuryer üçün əlavə məlumat</p>
                        <textarea type="text" className={styles.confirmation_textarea} />
                        <p className={styles.confirmation_title}>*çatdırılma müddəti: sifariş hazırlandıqdan sonra 1-3 iş günü ərzində</p>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className={styles.confirmation_btn_area}>
                        <div className="" style={{ width: "350px" }}>
                          <button type="submit" className={styles.confirmation_button}>
                            Sifarişi təsdiqlə
                          </button>
                        </div>
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
        <Modal.Header style={{ border: "none", padding: "16px 16px 0", background: "#161A1E", color: "white" }} closeButton></Modal.Header>
        <Modal.Body style={{ textAlign: "center", padding: "64px 54px", background: "#161A1E", color: "white" }}>
          <Modal.Title style={{ marginBottom: "8px", fontSize: "20px" }}>Sifariş üçün təşəkkür edirik!</Modal.Title>
          <p style={{ margin: "36px 0", fontSize: "20px" }}>Sizə yenidən xidmət etməyi səbirsizliklə gözləyirik!</p>
          <p
            style={{
              padding: "10px 20px",
              border: "1px solid transparent", // Base border
              borderImageSource: "linear-gradient(120.61deg, #FD3C43 -10.5%, #B622DC 38.25%, #3F27EB 80.92%)",
              borderImageSlice: 1, // Ensures the gradient is applied to the border
            }}
          >
            <strong style={{ fontSize: "20px" }}>Sizin sifariş nömrəniz:</strong> XXXX
          </p>

          <p style={{ fontSize: "18px" }}>Operatorumuz qısa müddətdə sizinlə əlaqə saxlayacaq.</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConfirmBasketPage;
