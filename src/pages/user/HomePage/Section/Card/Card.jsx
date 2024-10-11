import { Rating } from "@mui/material";
import style from "../../HomePage.module.scss";
import { PiHeartBold } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
function Card({ card }) {
  const { name, price, image, rating } = card;
  return (
    <div className={style.card}>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <span className={style.cardAnimationSpan}></span>
      <div style={{ position: "relative" }}>
        <div className={style.cardImgContainer} style={{ overflow: "hidden" }}>
          <img className={style.cardImg} src={image} />
        </div>
        <div className={style.heartSpan}>
          <PiHeartBold />
        </div>

        <div className={style.mailTitle}>
          <div className={style.namePrice}>
            <h4>{name}</h4>
            <p>{price} AZN</p>
          </div>
          <div className={style.ratingBasket}>
            <div>
              {" "}
              {/* <img src={rating} /> */}
              <Rating size="small" precision={0.5} name="read-only" value={rating} readOnly />
            </div>
            <div className={style.basketBg}>
            <a href='#'><SlBasket style={{width:"18px",height:"18px"}}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
