import React from 'react'
import style from "./basketTotal.module.scss"
const BasketTotalAmount = () => {
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