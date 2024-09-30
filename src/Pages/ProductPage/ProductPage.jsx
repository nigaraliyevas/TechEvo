import styles from "./ProductPage.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Features from "../../components/DetailFeatures/Features";

const ProductPage = () => {
  return (
    <section id="product">
      <div className="container">
        <div className={styles.productpage_content}>
          <div className={styles.productDetail}>
            <Row>
              <Col xs={6}>Left side</Col>
              <Col>Right side</Col>
            </Row>
          </div>

          <div className={styles.productDescription}>
            <Row>
              <Col>
                <Features id={63}/>
              </Col>
            </Row>
          </div>
          <div className={styles.comments_side}>
            <Row>
              <Col>
              İstifadəçi rəyləri
              </Col>
            </Row>
          </div>
          <div className={styles.similiarProducts}>
            <Row>
              <Col>
              Oxşar məhsullar
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
