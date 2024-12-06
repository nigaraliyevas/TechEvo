import { useEffect, useState } from "react";
import { useGetProductsByCategoryNameQuery } from "../../redux/sercives/productApi";
import styles from "./SimilarProducts.module.scss";
import Card from "../../pages/user/HomePage/Section/Card/Card";

const SimilarProducts = ({ product, categoryName }) => {
  useEffect(() => {
    const handleResize = () => {};

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [itemsToShow, setItemsToShow] = useState(3);
  const { data: categoryData, isLoading: isLaptopsLoading } = useGetProductsByCategoryNameQuery({ categoryName });
  console.log(categoryName);
  const filteredCategoryData = categoryData?.filter(item => item.id !== product?.id);
  return (
    <div>
      <h2 className={styles.similar_header}>Oxşar Məhsullar</h2>
      <div className={styles.similar_product_list}>
        <div className="row">
          {filteredCategoryData?.slice(0, itemsToShow).map(card => (
            <div className={`col-${itemsToShow}`} key={card.id} style={{ flex: "1" }}>
              <div className="cardContainer">
                <Card card={card} favoriteProductIds={null} refetchFavorites={null} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;