import image1 from "../../assets/images/DetailImage/unsplash_Hin-rzhOdWs.png";
import image2 from "../../assets/images/DetailImage/unsplash_2.png";
import image3 from "../../assets/images/DetailImage/unsplash_3.png";
import image4 from "../../assets/images/DetailImage/unsplash_4.png";

import { useState, useEffect } from "react";
import style from "./DetailImage.module.scss";

const DetailImageComponent = ({ setModalShow, product }) => {
  const [detailImage, setDetailImage] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  // UseEffect to set images once product is available
  useEffect(() => {
    if (product?.imageUrl
    ) {
      setDetailImage(product.imageUrl
      );
      setMainImage(product.imageUrl
        [0]); // Set the first image as main image
    }
  }, [product]);

  console.log(mainImage,"mainImage");
  

  // Render loading or empty state if images are not ready
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
            onClick={() => setMainImage(item)}
            src={item} // Assuming item is the image URL
            alt={`Product image ${index + 1}`}
          />
        ))}
      </div>
      <img
        onClick={() => setModalShow(true)}
        className={style.detail_big_image}
        src={mainImage} // Assuming mainImage is the image URL
        alt="Main Product Image"
      />
    </div>
  );
};

export default DetailImageComponent;
