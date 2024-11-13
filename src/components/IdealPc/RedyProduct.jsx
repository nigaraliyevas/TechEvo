import style from "./redyProduct.module.scss";
import laptop from '../../assets/images/IdealPc/laptop.svg'
import { SlBasket } from "react-icons/sl";
const RedyProduct = () => {
  return (
    <div className={style.redy_product_container}>
      <div className={style.redy_product_left}>
        <div className={style.redy_product_title}>
          Nə üçün istifadə edəcəksən?
        </div>
        <div>
          <select name="" id="">
            <option value="">Oyunlar</option>
            <option value="">Dizayn işləri</option>
            <option value="">Ofis nişləri</option>
            <option value="">Kodlaşdırma</option>
            <option value="">İnternet Browsing</option>
            <option value="">Evdə yüngül istifadə</option>
            <option value="">Video və şəkil redaktəsi</option>
          </select>
        </div>
        <div className={style.redy_product_title}>
          Harada istifadə edəcəksən?
        </div>
        <div>
          <select name="" id="">
            <option value="">Evdə</option>
            <option value="">Evdən kənarda</option>
          </select>
        </div>
        <div className={style.redy_product_title}>
          Görünüşü necə olsa daha yaxşıdı?
        </div>
        <div>
          <select name="" id="">
            <option value="">Aqressiv və seçilən</option>
            <option value="">Sadə və minimalist</option>
            <option value="">Eleqant</option>
            <option value="">Kompakt</option>
            <option value="">Önəmli deyil</option>
          </select>
        </div>
        <div className={style.redy_product_left_bottom}>
          <button>Tap</button>
        </div>
      </div>
      <div className={style.redy_product_right}>
          <img src={laptop} alt="laptop" />
          <div className={style.redy_product_right_title}>
          Apple MacBook Pro M3 (MRW63RU)
          </div>
          <div className={style.redy_product_right_price}>1500.00 AZN</div>
          <div className={style.redy_product_right_bottom}>
            <button className={style.redy_product_right_btn_more}>
            Ətraflı bax
            <div className={style.border}></div>
            </button>
            <button className={style.redy_product_right_btn}>
              <span><SlBasket/></span>
            Səbətə at
            </button>
          </div>
      </div>
    </div>
  );
};

export default RedyProduct;
