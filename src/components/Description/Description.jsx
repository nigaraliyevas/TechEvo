import style from "./Description.module.scss";
import Birkart from "../../assets/images/Description/birbank.png";
import { RiShieldCheckLine } from "react-icons/ri";
import { LuBox } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import StarRating from "../../components/Rating/StarRating";
import { addToCart } from "../../redux/slices/BasketSlice";
import { useDispatch, useSelector } from "react-redux";

const Description = ({ product }) => {
  if (!product) {
    return <div>Loading product details...</div>;
  }

  const { name, price, description, rating, isStock } = product;
  const { basket } = useSelector(state => state.basket);

  const dispatch = useDispatch();
  const addbasket = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={style.productCard}>
      <h1 className={style.productTitle}>{name}</h1>
      <div className={style.rating}>
        <StarRating style={{ color: "gold" }} value={rating} />
      </div>
      <p className={style.price}>{price} AZN</p>
      <p
        className={`${style.stockStatus} ${isStock ? style.inStock : style.outOfStock}`}
      >
        {isStock ? "Məhsul mövcuddur" : "Məhsul mövcud deyil"}
      </p>
      <button onClick={addbasket} className={style.addToCartButton}>
        <span style={{ paddingRight: "13px" }}>
          <a href="#">
            <SlBasket style={{ width: "22px", height: "21px", color: "white" }} />
          </a>
        </span>
        Səbətə at
      </button>
      <div className={style.line}></div>

      <p className={style.description}>{description}</p>

      <div className={style.line}></div>

      {/* Footer for desktop */}
      <div className={`${style.footer}`}>
        <div className={style.option}>
          <div className={style.birKartP}>
            <p>Birkart taksitlə əldə et</p>
          </div>
          <div className={style.birKartImg}>
            <div className={style.optionImg}>
              <img src={Birkart} alt="Birkart" style={{ width: "20px" }} />
            </div>
            <span>12 ay {(price / 12).toFixed(2)} Azn</span>
          </div>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.option}>
          <span style={{ color: "#E6E6E6" }}>
            Daxili kredit üçün<a href="#"> müraciət et </a>
          </span>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.option}>
          <RiShieldCheckLine size={22} style={{ paddingRight: "8px" }} />
          <span>1 il zəmanət</span>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.option}>
          <LuBox size={22} style={{ paddingRight: "8px" }} />
          <span>Çatdırılma</span>
        </div>
      </div>

      {/* Footer for mobile */}
      <div className={`${style.footerMobile}`}>
        <div className="col-6" style={{ borderRight: "1px solid #323437" }}>
          <div className={style.mobileOption}>
            <img src={Birkart} alt="Birkart" style={{ width: "20px" }} />
            <span>Birkart taksitlə əldə et 12 ay {(price / 12).toFixed(2)} Azn</span>
          </div>
          <div className={style.mobileOption}>
            <RiShieldCheckLine size={18} />
            <span>1 il zəmanət</span>
          </div>
        </div>
        <div className="col-6">
          <div className={style.mobileOption}>
            <span>
              Daxili kredit üçün <a href="#">müraciət et</a>
            </span>
          </div>
          <div className={style.mobileOption}>
            <LuBox size={18} />
            <span>Çatdırılma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
