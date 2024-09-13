import React from 'react'
import style from '../pages/HomePage/HomePage.module.scss'
import { PiHeartBold } from "react-icons/pi";

function Card({ card }) {
    const { name, price, image, rating, basket } = card
    return (
        <div className={style.card}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div style={{ position: "relative" }}>
                <div style={{overflow:"hidden"}}>
                    <img className={style.cardImg} src={image} />
                </div>
                <div className={style.heartSpan}><PiHeartBold /></div>

                <div className={style.mailTitle}>
                    <div className={style.namePrice}>
                        <h4>{name}</h4>
                        <p>{price}</p>
                    </div>
                    <div className={style.ratingBasket}>
                        <div> <img src={rating} /></div>
                        <div className={style.basketBg}><img src={basket} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card