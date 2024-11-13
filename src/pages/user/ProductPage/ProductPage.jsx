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
import { useRef, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetProductByIdQuery, useGetProductsByCategoryNameQuery } from "../../../redux/sercives/productApi";
import Card from "../HomePage/Section/Card/Card";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");

  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const { data: categoryData, isLoading: isLaptopsLoading } = useGetProductsByCategoryNameQuery(product ? product.categoryName : undefined);
  const filteredCategoryData = categoryData?.filter(item => item.id !== product?.id);

  const [modalShow, setModalShow] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const caruselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  if (!id) return null;

  const extendedCarouselImages = [...carouselImages, ...carouselImages];

  const scrollNext = () => {
    if (currentIndex === extendedCarouselImages.length - 1) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(extendedCarouselImages.length - 2);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="product">
      <div className={styles.container}>
        {!modalShow && (
          <div className={styles.productpage_content}>
            <div className={styles.productDetail}>
              <Row>
                <Col xs={5} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <DetailImageComponent
                    product={product}
                    setModalShow={setModalShow}
                    setCarouselImages={setCarouselImages} // Modalda carousele göndəriləcək şəkillər
                  />
                </Col>
                <Col xs={7}>
                  <Description product={product} />
                </Col>
              </Row>
            </div>

            <div className={styles.productDescription}>
              <Row>
                <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <Features id={2} />
                </Col>
              </Row>
            </div>
            <div className={styles.comments_side}>
              <Row>
                <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <Reviews productId={2} />
                </Col>
              </Row>
            </div>
            <div className={styles.similiarProducts}>
              <Row>
                <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <div>
                    <h2 className={styles.similar_header}>Oxşar Məhsullar</h2>
                    <div className={styles.similar_product_list}>
                      <div className="row">
                        {filteredCategoryData?.slice(0, itemsToShow).map(card => (
                          <div className={`col-${itemsToShow}`} key={card.id} style={{ flex: "1" }}>
                            <div className="cardContainer">
                              <Card card={card} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}

        <div></div>

        {modalShow && (
          <div className={styles.detail_modal_image}>
            <h2 className={styles.modal_image_title}>
              {product?.name} {/* Məhsul adını dinamik göstərək */}
              <div onClick={() => setModalShow(false)}>
                <span>
                  <IoMdClose size={36} />
                </span>
              </div>
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
                  <div className={styles.modal_image_carusel_wrap}>
                    <div
                      className={styles.modal_image_carusel}
                      style={{
                        transform: `translateX(-${currentIndex * 580}px)`,
                      }}
                    >
                      {extendedCarouselImages.map((img, index) => (
                        <div className={styles.carusel_image} key={index}>
                          <img style={{ width: "580px", height: "480px" }} className={styles.module_image} src={img} alt={`Product image ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
