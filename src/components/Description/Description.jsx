import React from 'react'
import style from './Description.module.scss'
import Birkart from '../../../public/assets/images/Description/birKart.png'
import ShieldTick from '../../../public/assets/images/Description/shieldTick.png'
import Box from '../../../public/assets/images/Description/box.png'

const Description = () => {
    return (
        <div className={style.productCard}>
            <h1 className={style.productTitle}>Apple MacBook Pro M3 (MRW63RU)</h1>
            <div className={style.rating}>
                <span className={style.stars}>⭐⭐⭐⭐⭐</span>
                <span className={style.ratingNumber}>4.5</span>
            </div>
            <p className={style.price}>1500.00 AZN</p>
            <button className={style.addToCartButton}>Səbətə at</button>
            <div className={style.line}></div>

            <p className={style.description}>
                Apple MacBook Air M3 (MRXT3RU) təqdim edir həm keyfiyyəti, həm də mobilliyi.
                Bu yüngül və incə apple notebook, gücü və effektivliyi hər yerdə sizinlə aparır.
                M3 çipinə malik olan bu apple laptop, yüksək sürət və işləmə gücü təyin edir...
            </p>

            <div className={style.line}></div>
            <div><p>Birkart taksitlə əldə et</p></div>
            <div className={style.footer}>
                <div className={style.option}>
                    <img src={Birkart} alt="Birkart" />
                    <span>12 ay 150 Azn</span>
                    <div className={style.verticalLine}></div>
                </div>
                <div className={style.option}>
                    <span>Daxili kredit üçün </span><a href="#">müraciət et</a>
                    <div className={style.verticalLine}></div>
                </div>

                <div className={style.option}>
                    <img src={ShieldTick} ></img><span>1 il zəmanət</span>
                    <div className={style.verticalLine}></div>
                </div>
                <div className={style.option}>
                    <img src={Box} ></img><span>Çatdırılma</span>
                </div>
            </div>
        </div>
    );
};


export default Description