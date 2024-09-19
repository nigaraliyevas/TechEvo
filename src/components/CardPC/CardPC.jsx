import { useSelector, useDispatch } from "react-redux";
import { allCards } from "../../redux/slices/CardSlice";
import { PiHeartBold } from "react-icons/pi";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./CardPC.module.scss";

const CardPC = ({cards}) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(allCards());
  }, [dispatch]);

  return (
    <>
      {cards.map(card => (
        <div key={card.id} className={styles.card}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div style={{ position: "relative" }}>
            <div style={{ overflow: "hidden" }}>
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardPC;
