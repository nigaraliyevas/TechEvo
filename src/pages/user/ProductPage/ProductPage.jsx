import styles from "./ProductPage.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Reviews from "../../components/CommentSide/Reviews";
import DetailImageComponent from "../../../components/DetailImage/DetailImageComponent";
// import CommentSide from "../../components/CommentSide/Reviews";
import Description from "../../../components/Description/Description";
import Features from "../../../components/DetailFeatures/Features";
import Reviews from "../../../components/Reviews/Reviews";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRef, useState } from "react";
const ProductPage = () => {
  const [modalShow,setModalShow] = useState(false)
  const caruselRef = useRef(null);

  const scrollNext = () => {
    if (caruselRef.current) {
      const maxScrollWidth =
        caruselRef.current.scrollWidth - caruselRef.current.clientWidth;
  
      
      if (caruselRef.current.scrollLeft < maxScrollWidth) {
        caruselRef.current.scrollLeft += 580; 
      }
    }
  };
  
  const scrollPrev = () => {
    if (caruselRef.current) {
      if (caruselRef.current.scrollLeft > 0) {
        caruselRef.current.scrollLeft -= 580; 
      }
    }
  };
  return (
    <section  id="product">
      <div  className={styles.container}>
        {!modalShow &&  <div className={styles.productpage_content}>
          <div className={styles.productDetail}>
            <Row>
              <Col xs={5}  style={{paddingLeft: "0px",paddingRight: "0px"}}>
                <DetailImageComponent setModalShow={setModalShow} />
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
                <Features id={63} />
              </Col>
            </Row>
          </div>
          <div className={styles.comments_side}>
            <Row>
              <Col style={{paddingLeft: "0px",paddingRight: "0px"}}>
                <Reviews /> 
              </Col>
            </Row>
          </div>
          <div className={styles.similiarProducts}>
            <Row>
              <Col>Oxşar məhsullar</Col>
            </Row>
        </div>
          </div>}
       
 {
  modalShow &&        <div  className={styles.detail_modal_image}>
  <h2  className={styles.modal_image_title}>
    Apple MacBook Pro M3 (MRW63RU)   <div onClick={()=>setModalShow(false)}  >X</div>
  </h2>
  <div className={styles.modal_image_carusel_container}>
    <div className={styles.modal_images}>
      <div className={styles.modal_image_icons}>
        <div onClick={scrollPrev}>
          <IoIosArrowBack size={36} />
        </div>
        <div onClick={scrollNext}>
          <IoIosArrowForward size={36} />
        </div>
      </div>

      <div className={styles.modal_image_carusel_wrap} ref={caruselRef}>
        <div className={styles.modal_image_carusel}>
          <div className={styles.carusel_image}>
            <img  style={{width:"580px",height:"480px"}} className={styles.module_image} src="https://www.bakuelectronics.az/assets/images/products/158475/notbuk-asus-156-fhd-ipsi3-1215uram-8gbssd-512gbintel-uhd-90nb1021-m01jr0-1.jpg" alt="" />
          </div>
          <div className={styles.carusel_image}>
            <img  style={{width:"580px",height:"480px"}} className={styles.module_image} src="https://www.bakuelectronics.az/assets/images/products/158475/notbuk-asus-156-fhd-ipsi3-1215uram-8gbssd-512gbintel-uhd-90nb1021-m01jr0-1.jpg" alt="" />
          </div>
          <div className={styles.carusel_image}>
            <img  style={{width:"580px",height:"480px"}} className={styles.module_image} src="https://www.bakuelectronics.az/assets/images/products/158475/notbuk-asus-156-fhd-ipsi3-1215uram-8gbssd-512gbintel-uhd-90nb1021-m01jr0-1.jpg" alt="" />
          </div>
          <div className={styles.carusel_image}>
            <img  style={{width:"580px",height:"480px"}} className={styles.module_image} src="https://www.bakuelectronics.az/assets/images/products/158475/notbuk-asus-156-fhd-ipsi3-1215uram-8gbssd-512gbintel-uhd-90nb1021-m01jr0-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
 } 
      </div>
      
    </section>
  );
};

export default ProductPage;
