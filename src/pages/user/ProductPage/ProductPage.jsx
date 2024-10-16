import styles from "./ProductPage.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Reviews from "../../components/CommentSide/Reviews";
import DetailImageComponent from "../../../components/DetailImage/DetailImageComponent";
// import CommentSide from "../../components/CommentSide/Reviews";
import Description from "../../../components/Description/Description";
import Features from "../../../components/DetailFeatures/Features";
import Reviews from "../../../components/Reviews/Reviews";

const ProductPage = () => {
  return (
    <section id="product">
      <div className={styles.container}>
        <div className={styles.productpage_content}>
          <div className={styles.productDetail}>
            <Row>
              <Col xs={5}  style={{paddingLeft: "0px",paddingRight: "0px"}}>
                <DetailImageComponent />
              </Col>
              {/* <Col style={{paddingLeft: "0px",paddingRight: "0px"}}> */}
              <Col xs={7} >
                <Description />
              </Col>
            </Row>
          </div>

          <div className={styles.productDescription}>
            <Row>
              <Col style={{paddingLeft: "0px",paddingRight: "0px"}}>
                <Features id={2} />
              </Col>
            </Row>
          </div>
          <div className={styles.comments_side}>
            <Row>
              <Col style={{paddingLeft: "0px",paddingRight: "0px"}}>
                {/* <Reviews /> */}
              </Col>
            </Row>
          </div>
          <div className={styles.similiarProducts}>
            <Row>
              <Col>Oxşar məhsullar</Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
