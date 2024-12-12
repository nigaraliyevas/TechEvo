import React, { useState } from "react";
import style from "./redyProduct.module.scss";
import laptop from "../../assets/images/IdealPc/laptop.svg";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/BasketSlice";

const RedyProduct = () => {
  const [usingPurpose, setUsingPurpose] = useState("");
  const [whereUse, setWhereUse] = useState("");
  const [look, setLook] = useState("");
const dispatch = useDispatch()
  const [produc, setProduct] = useState(null);
  console.log(produc, "PRODUCT");

  const handleSubmit = () => {
    const requestBody = {
      usingPurpose,
      whereUse,
      look,
    };

    fetch("http://srv654911.hstgr.cloud:8081/api/v1/product/choosePC", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data, "data");
      })
      .catch((err) => console.error("Error:", err));
  };



  fetch("http://srv654911.hstgr.cloud:8081/api/v1/product/getAll")
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

    const addBasket = () => {
      dispatch(addToCart(produc));
    };

  return (
    <div className={style.redy_product_container}>
      <div className={style.redy_product_left}>
        <div className={style.redy_product_title}>
          Nə üçün istifadə edəcəksən?
        </div>
        <div>
          <select
            value={usingPurpose}
            onChange={(e) => setUsingPurpose(e.target.value)}
          >
            <option value="">Seçin</option>
            <option value="Gaming, Professional Work">Oyunlar</option>
            <option value="Content Creation">
              Dizayn işləri
            </option>
            <option value="Gaming, Content Creation">Ofis işləri</option>
            <option value="Content Creation, Productivity">Kodlaşdırma</option>
            <option value="Music Production">İnternet Browsing</option>
            <option value="Workstation">
              Evdə yüngül istifadə
            </option>
            <option value="Recording">Video və şəkil redaktəsi</option>
          </select>
        </div>
        <div className={style.redy_product_title}>
          Harada istifadə edəcəksən?
        </div>
        <div>
          <select
            value={whereUse}
            onChange={(e) => setWhereUse(e.target.value)}
          >
            <option value="">Seçin</option>
            <option value="Home, Office">Evdə</option>
            <option value="Home Studio">Evdən kənarda</option>
          </select>
        </div>
        <div className={style.redy_product_title}>
          Görünüşü necə olsa daha yaxşıdı?
        </div>
        <div>
          <select value={look} onChange={(e) => setLook(e.target.value)}>
            <option value="">Seçin</option>
            <option value="Sleek and Modern">Aqressiv və seçilən</option>
            <option value="Professional">Sadə və minimalist</option>
            <option value="Sleek and Modern">Eleqant</option>
            <option value="Sleek and Modern">Kompakt</option>
            <option value="Sleek and Modern">Önəmli deyil</option>
          </select>
        </div>
        <div className={style.redy_product_left_bottom}>
          <button onClick={handleSubmit}>Tap</button>
        </div>
      </div>
      <div className={style.redy_product_right}>
        {produc && (
          <div>
            {produc && <img src={produc?.imageUrl[0]} alt="laptop" />}

            <div className={style.redy_product_right_title}>
              {produc.name}
              {produc.name}
            </div>
            <div className={style.redy_product_right_price}>{produc.price}</div>
            <div className={style.redy_product_right_bottom}>
              <button className={style.redy_product_right_btn_more}>
                Ətraflı bax
                <div className={style.border}></div>
              </button>
              <button onClick={addBasket} className={style.redy_product_right_btn}>
                <span style={{ paddingRight: "12px" }}>
                  <SlBasket />
                </span>
                Səbətə at
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedyProduct;
