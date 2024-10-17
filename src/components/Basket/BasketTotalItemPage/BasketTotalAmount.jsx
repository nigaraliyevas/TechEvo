import React from 'react'
import style from "./basketTotal.module.scss"
const BasketTotalAmount = () => {
  fetch("http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/product/getAllProducts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
  return (
    <div className={style.BasketTotalAmount}>
          <h2 className={style.amount_title}>
            Ümumi
          </h2>
          <div className={style.total_texts}>
            <p>Məhsulların qiyməti: </p>
            <p>20.000 AZN</p>
          </div>
          <div className={style.total_texts}>
            <p>Çatdırılma: </p>
            <p>Pulsuz</p>
          </div>
          <div className={style.line}>

          </div>
          <div className={style.total_texts}>
            <p>Toplam: </p>
            <p>20.005 AZN</p>
          </div>
          <button className={style.basket_btn}>Səbəti təsdiqlə</button>
    </div>
  )
}

export default BasketTotalAmount