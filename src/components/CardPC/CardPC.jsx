import { PiHeartBold } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import Basket from "/assets/images/HomePage/Products/basket.png";

import styles from "./CardPC.module.scss";
import { useSelector } from "react-redux";
const CardPC = () => {
  const { filteredProducts } = useSelector(state => state.filter);
  const { currentPage, itemsPerPage } = useSelector(state => state.pagination);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {currentItems.length === 0 ? (
        <div className={styles.noProductsMessage}>There are no products.</div>
      ) : (
        
        currentItems.map(card => (
         
          <div key={card.id} className={styles.card}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img className={styles.cardImg} src={card.image} alt={card.name} />
              </div>
              <div className={styles.heartSpan}>
                <PiHeartBold />
              </div>

              <div className={styles.mailTitle}>
                <div className={styles.namePrice}>
                  <h4>{card.name}</h4>
                  <p>{card.price}</p>
                </div>
                <div className={styles.ratingBasket}>
                  <div>
                    <img src={card.rating} alt="rating" />
                  </div>
                  <div className={styles.basketBg}>
                    <img src={Basket} />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        ))
      )}
       
    </>
  );
};

export default CardPC;
