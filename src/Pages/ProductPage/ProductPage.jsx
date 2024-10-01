import styles from "./ProductPage.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailImageComponent from "../../components/DetailImage/DetailImageComponent";
import CommentSide from "../../components/CommentSide/Reviews";
import Reviews from "../../components/CommentSide/Reviews";


const ProductPage = () => {
  return (
    <section id="product">
      <div className="container">
        <div className={styles.productpage_content}>
          <div className={styles.productDetail}>
            <Row>
              <Col xs={6}><DetailImageComponent/></Col>
              <Col></Col>
            </Row>
          </div>

          <div className={styles.productDescription}>
            <Row>
              <Col>
              Xüsusiyyətlər
              </Col>
            </Row>
          </div>
          <div className={styles.comments_side}>
            <Row>
              <Col>
              <Reviews/>
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
