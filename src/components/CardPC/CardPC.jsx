import { useSelector, useDispatch } from "react-redux";
import { allCards } from "../../redux/slices/CardSlice";
import { PiHeartBold } from "react-icons/pi";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./CardPC.module.scss";
import { Rating } from "@mui/material";

const CardPC = ({ cards }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCards());
  }, [dispatch]);
  return (
    <>
    {cards.map((card) => (
      <div key={card.id} className={styles.card}>
        <div className={styles.borderAnimation}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
              <Rating value={card.rate || 0} precision={0.5} readOnly />
            </div>
          </div>
        </div>
      </div>
    ))}
  </>

  );
};

export default CardPC;
