import React, { useState } from "react";
import style from "./basketTotal.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const BasketTotalAmount = () => {
  const { totalPrice } = useSelector(state => state.basket);
  const totalamount = Math.round(totalPrice * 100) / 100;
  localStorage.setItem("total", totalamount);

  return (
    <div className={style.BasketTotalAmount}>
      <h2 className={style.amount_title}>Ümumi</h2>
      <div className={style.total_texts}>
        <p>Məhsulların qiyməti: </p>
        <p>{totalamount} AZN</p>
      </div>
      <div className={style.total_texts}>
        <p>Çatdırılma: </p>
        <p>Pulsuz</p>
      </div>
      <div className={style.line}></div>
      <div className={style.total_texts}>
        <p>Toplam: </p>
        <p>{totalamount} AZN</p>
      </div>
      <Link to={"/confirm"} className={style.basket_btn}>
        Səbəti təsdiqlə
      </Link>
    </div>
  );
};

export default BasketTotalAmount;
