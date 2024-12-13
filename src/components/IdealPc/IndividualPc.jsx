import style from "./individual.module.scss";
import laptop from '../../assets/images/IdealPc/laptop.svg'
import { SlBasket } from "react-icons/sl";

const IndividualPc = () => {

  fetch("http://srv654911.hstgr.cloud:8081/api/v1/product/filterCreatePc")
  .then((data) => {
    console.log(data); // Cavabı yoxlayın
    return data.text(); // JSON-a çevirməzdən əvvəl mətn şəklində cavabı yoxlayın
  })
  .then((text) => {
    console.log("Raw response:", text); // Raw cavabı göstər
    return JSON.parse(text); // JSON-a çevirin
  })
  .then((res) => console.log(res))
  .catch((err) => console.error("Error:", err));

  return (
    <div className={style.individual_container}>
      <div className={style.individual_left}>
        <div className={style.individual_left_select}>
          <div>
            <p className={`${style.active_title} ${style.disable_title}}`}>Ana plata</p>
            <select name="" id="">
              <option value="">ATX</option>
              <option value="">Micro-ATX</option>
              <option value="">Mini-ITX</option>
              <option value="">Chipset</option>
              <option value="">İntel-Z790 </option>
              <option value="">AMD B650 </option>
            </select>
          </div>
          <div>
            <p>SSD</p>
            <select  disabled name="" id="">
              <option value="">128 GB</option>
              <option value="">256 BG</option>
              <option value="">512 GB</option>
              <option value="">1 TB</option>
            </select>
          </div>
        </div>
        <div  className={style.individual_left_select}>
          <div>
            <p>Videokart</p>
            <select  disabled name="" id="">
              <option value="">NVİDİA GeForce RTX 4090</option>
              <option value="">NVİDİA GeForce RTX 3080</option>
              <option value="">AMD Radeon RX 7900 XTX</option>
              <option value="">AMD Radeon RX 6800 XTX</option>
            </select>
          </div>
          <div>
            <p>Prosesor</p>
            <select  disabled name="" id="">
              <option value="">Intel Core i3</option>
              <option value="">Intel Core i5</option>
              <option value="">Intel Core i7</option>
              <option value="">Intel Core i9</option>
            </select>
          </div>
        </div>
        <div  className={style.individual_left_select}>
          <div>
            <p>Operativ yaddaş</p>
            <select  disabled name="" id="">
              <option value="">ATX</option>
              <option value="">Micro-ATX</option>
              <option value="">Mini-ITX</option>
              <option value="">Chipset</option>
              <option value="">İntel-Z790 </option>
              <option value="">AMD B650 </option>
            </select>
          </div>
          <div>
            <p>Qidalanma bloku</p>
            <select  disabled name="" id="">
              <option value="">128 GB</option>
              <option value="">256 BG</option>
              <option value="">512 GB</option>
              <option value="">1 TB</option>
            </select>
          </div>
        </div>
        <div  className={style.individual_left_select}>
          <div>
            <p>HDD</p>
            <select disabled name="" id="">
            <option value="">128 GB</option>
              <option value="">256 BG</option>
              <option value="">512 GB</option>
              <option value="">1 TB</option>
              <option value="">4 TB</option>
            </select>
          </div>
          <div>
            <p>keys</p>
            <select  disabled name="" id="">
            <option value="">ATX</option>
              <option value="">Micro-ATX</option>
              <option value="">Mini-ITX</option>
              <option value="">Material steel</option>
            </select>
          </div>
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
            <span style={{paddingRight:"12px"}}><SlBasket/></span>
            Səbətə at
            </button>
          </div>
      </div>
    </div>
  );
};

export default IndividualPc;
