import { useState, useEffect } from "react";
import style from "./DetailImage.module.scss";

const DetailImageComponent = ({ setModalShow, product, setCarouselImages, setCurrentIndex,setImageIndex }) => {
  const [detailImage, setDetailImage] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (product?.imageUrl) {
      setDetailImage(product.imageUrl);
      setMainImage(product.imageUrl[0]);
    }
  }, [product]);

  if (!detailImage || detailImage.length === 0) {
    return <div>Loading images...</div>;
  }

  return (
    <div className={style.detail_images}>
      <div className={style.detail_image_left}>
        {detailImage.map((item, index) => (
          <img
            className={style.detail_small_image}
            key={index}
            onClick={() => {
              setMainImage(item);
              setCarouselImages(product.imageUrl);
              setImageIndex(index); // Şəkilin indeksini ayrıca göndəririk
            }}
            src={item}
            alt={`Product image ${index + 1}`}
          />
        ))}
      </div>
      <img
        onClick={() => {
          setModalShow(true);
          setCarouselImages(product.imageUrl);
          // setCurrentIndex(1);
        }}
        className={style.detail_big_image}
        src={mainImage}
        alt="Main Product Image"
      />
    </div>
  );
};

export default DetailImageComponent;