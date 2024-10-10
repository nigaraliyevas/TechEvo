import style from "../../../Pages/HomePage/HomePage.module.scss";
import { PiHeartBold } from "react-icons/pi";
// import Basket from "/assets/images/HomePage/Products/basket.png";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/slices/BasketSlice";
import { SlBasket } from "react-icons/sl";
function Card({ card }) {
  const { name, price, image, rating } = card;
  return (
    <div className={style.card}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
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
              <img src={rating} />
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
