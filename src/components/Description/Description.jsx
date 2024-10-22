import style from "./Description.module.scss";
import Birkart from "../../assets/images/Description/birbank.png";
import { RiShieldCheckLine } from "react-icons/ri";
import { LuBox } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
//import StarRating from '../../components/Rating/StarRating';

const Description = ({ product }) => {
  // İlk olaraq product mövcudluğunu yoxlayırıq
  if (!product) {
    return <div>Loading product details...</div>;
  }

  const { name, price, description, rating } = product;
  const count = rating
  console.log(product, "product detal");
  

  return (
    <div className={style.productCard}>
      <h1 className={style.productTitle}>{name}</h1>
      <div className={style.rating}>
        {/* <StarRating style={{color: "gold"}} value={rating}/> */}
        {/* <span className={style.ratingNumber}>4.5</span> */}
      </div>
      <p className={style.price}>{price} AZN</p>
      <button className={style.addToCartButton}>
        <span style={{ paddingRight: "13px" }}>
          <a href="#">
            <SlBasket
              style={{ width: "22px", height: "21px", color: "white" }}
            />
          </a>
        </span>
        Səbətə at
      </button>
      <div className={style.line}></div>

      <p className={style.description}>{description}</p>

      <div className={style.line}></div>

      <div className={style.footer}>
        <div className={style.option}>
          <div className={style.birKartP}>
            <p>Birkart taksitlə əldə et</p>
          </div>
          <div className={style.birKartImg}>
            <div className={style.optionImg}>
              <img src={Birkart} alt="Birkart" />
            </div>

            <span>12 ay 150 Azn</span>
          </div>
        </div>
        <div className={style.verticalLine}></div>
        <div className={style.option}>
          <span style={{ color: "#E6E6E6" }}>
            {" "}
            Daxili kredit üçün<a href="#"> müraciət et </a>{" "}
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
    </div>
  );
};

export default Description;
