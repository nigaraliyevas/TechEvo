import React from 'react'
import style from '../pages/HomePage/HomePage.module.scss'
import { PiHeartBold } from "react-icons/pi";

function Card({ card }) {
    const { name, price, image, rating, basket } = card
    return (
        <div className={style.card}>
            <div style={{position:"relative"}}>

                <img src={image} />
                <span className={style.heartSpan}><PiHeartBold /></span>

                <div className={style.mailTitle}>
                    <div className={style.namePrice}>
                        <h3>{name}</h3>
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