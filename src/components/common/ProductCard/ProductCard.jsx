import { PiHeartBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import styles from "./ProductCard.module.scss";
import { SlBasket } from "react-icons/sl";
import { Rating } from "@mui/material";

const ProductCard = ({data}) => {
  return (
    <div key={data.id} className={styles.card}>
    <Link to="/product" style={{ textDecoration: "none" }}>
      <span className={styles.cardAnimationSpan}></span>
      <span className={styles.cardAnimationSpan}></span>
      <span className={styles.cardAnimationSpan}></span>
      <span className={styles.cardAnimationSpan}></span>
      <div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div className={styles.cardImgContainer} style={{ overflow: "hidden" }}>
            <img className={styles.cardImg} src={data.imageUrl} alt={data.name} />
          </div>
        </div>


        <div className={styles.heartSpan}>
          <PiHeartBold/>
        </div>

        <div className={styles.mailTitle}>
          <div className={styles.namePrice}>
            <h4>{data.name}</h4>
            <p>{data.price} Azn</p>
          </div>
          <div className={styles.ratingBasket}>
              {/* Rating: {data.rating} */}
              <Rating size="small" precision={0.5} name="read-only" value={data.rating} readOnly />
              {/* <img src={card.rating} alt="rating" /> */}
            <div className={styles.basketBg}>
              {/* <Link to="/basket" className="text-decoration-cone"> */}
              <a href='#'><SlBasket style={{ width: "18px", height: "18px" }} /></a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default ProductCard
