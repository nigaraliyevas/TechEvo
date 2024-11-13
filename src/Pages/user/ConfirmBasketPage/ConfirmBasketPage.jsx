import { Col, Row } from "react-bootstrap";
import Input from "../../../components/Input/Input";
import styles from "./ConfirmBasketPage.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const ConfirmBasketPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const regions = [{ name: "Nəsimi rayonu" }, { name: "Nizami rayonu" }, { name: "Pirallahı rayonu" }, { name: "Xəzər rayonu" }, { name: "Nərimanov rayonu" }, { name: "Xəzər rayonu" }, { name: "Binəqədi rayonu" }, { name: "Yasamal rayonu" }, { name: "Suraxanı rayonu" }];

  return (
    <div>
      <section className={styles.confirmation}>
        <div className="container">
          <div className={styles.confirmation_area}>
            <div className={styles.confirmation_box}>
              <div className={styles.confirmation_content}>
                <form action="" className={styles.confirmation_form} method="post">
                  <h2 className={styles.confirmation_header}>Səbəti təsdiqlə</h2>
                  <Row>
                    <Col lg={6}>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Ad</label>
                        <input placeholder="Fidan" type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} />{" "}
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
                        <input placeholder="Salayeva" type="text" className={`${styles.confirmation_input} ${styles.placeholder_white}`} />
                      </div>
                      <div className={styles.confirmation_form_box}>
                        <label className={styles.confirmation_label}>Şəhər</label>
                        <select name="" id="" className={styles.confirmation_select}>
                          <option value="" disabled>
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
    </div>
  );
};

export default ConfirmBasketPage;
