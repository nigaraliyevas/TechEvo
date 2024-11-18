import { useState, useEffect } from "react";
import styles from "./ProductPage.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailImageComponent from "../../../components/DetailImage/DetailImageComponent";
import Description from "../../../components/Description/Description";
import Features from "../../../components/DetailFeatures/Features";
import Reviews from "../../../components/Reviews/Reviews";
import { IoIosArrowForward, IoIosArrowBack, IoMdClose } from "react-icons/io";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/sercives/productApi";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");

  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  // console.log(product, "detailData");

  const [modalShow, setModalShow] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState();
  const extendedCarouselImages = [...carouselImages, ...carouselImages];

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
  }, [id, navigate]);

  if (!id) return null;

  // console.log(carouselImages, "detailImage");

  useEffect(() => {
    if (modalShow) {
      setCurrentIndex(imageIndex);
    } else {
      setCurrentIndex(null);
    }
  }, [modalShow, imageIndex]);
  const scrollNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
  };

  const scrollPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
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
                    setCarouselImages={images => setCarouselImages(images || [])}
                    setImageIndex={setImageIndex} // Başlanğıc şəkil indeksini təyin etmək üçün
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
                  <Features id={id} />
                </Col>
              </Row>
            </div>
            <div className={styles.comments_side}>
              <Row>
                <Col style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <Reviews data={{ id }} />
                </Col>
              </Row>
            </div>
            <div className={styles.similiarProducts}>
              <Row>
                <Col>Oxşar məhsullar</Col>
              </Row>
            </div>
          </div>
        )}

        {modalShow && (
          <div className={styles.detail_modal_image}>
            <h2 className={styles.modal_image_title}>
              {product?.name}
              <div
                onClick={() => {
                  setModalShow(false);
                  setCurrentIndex(null);
                }}
              >
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

                <div className={styles.modal_image_carusel_wrap}>
                  <div
                    className={styles.modal_image_carusel}
                    style={{
                      transform: `translateX(-${currentIndex * 492}px)`,
                    }}
                  >
                    {carouselImages.map((img, index) => (
                      <div className={styles.carusel_image} key={index}>
                        <img style={{ width: "492px", height: "400px" }} className={styles.module_image} src={img} alt={`Product image ${index + 1}`} />
                      </div>
                    ))}
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
