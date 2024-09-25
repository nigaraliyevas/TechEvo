import React from 'react'
import style from './Description.module.scss'
import Birkart from '../../../public/assets/images/Description/birbank.png'
import { RiShieldCheckLine } from "react-icons/ri";
import { LuBox } from "react-icons/lu";
import { Rating } from '@mui/material';

const Description = () => {
    return (
        <div className={style.productCard}>
            <h1 className={style.productTitle}>Apple MacBook Pro M3 (MRW63RU)</h1>
            <div className={style.rating}>
                {/* <span className={style.stars}>⭐⭐⭐⭐⭐</span> */}
                <Rating name="read-only" precision={0.5} value={4.5} readOnly />
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
                    <div className={style.optionImg}>
                    <img src={Birkart} alt="Birkart" />
                    </div>
                    
                    <span>12 ay 150 Azn</span>
                </div>
                    <div className={style.verticalLine}></div>
                <div className={style.option}>
                    <span>Daxili kredit üçün </span><a href="#">müraciət et</a>
                </div>
                    <div className={style.verticalLine}></div>

                <div className={style.option}>
                    <RiShieldCheckLine  size={22}/><span>1 il zəmanət</span>
                </div>
                    <div className={style.verticalLine}></div>
                <div className={style.option}>
                    <LuBox  size={22}/><span>Çatdırılma</span>
                </div>
            </div>
        </div>
    );
};


export default Description