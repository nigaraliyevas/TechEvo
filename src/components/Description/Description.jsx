import React from 'react'
import style from './Description.module.scss'
import Birkart from '../../../public/assets/images/Description/birbank.png'
import { RiShieldCheckLine } from "react-icons/ri";
import { LuBox } from "react-icons/lu";
import { Rating } from '@mui/material';
/*jhgjhgjhgj*/

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
                Apple MacBook Air M3 (MRXT3RU) təqdim edir həm keyfiyyət, həm də mobiliteyi. Bu yüngül və incə apple notebook, gücü və effektivliyi hər yerdə sizinlə aparır. M3 çipinə malik olan bu apple laptop, yüksək sürət və işləmə gücü təmin edir, iş və əyləncə üçün ideal bir cihazdır. Parlaq Retina ekranı və uzunömürlü batareyası ilə, Apple MacBook Air, gözlənilən təcrübədən daha çoxunu verir. Apple macbook qiymeti də, təklif etdiyi üstün xüsusiyyətlərə nəzərən münasibdir.
            </p>

            <div className={style.line}></div>

            <div className={style.footer}>
                <div className={style.option}>
                    <div className={style.birKartP}><p>Birkart taksitlə əldə et</p></div>
                    <div className={style.birKartImg}>
                        <div className={style.optionImg}>
                            <img src={Birkart} alt="Birkart" />
                        </div>

                        <span>12 ay 150 Azn</span>
                    </div>
                </div>
                <div className={style.verticalLine}></div>
                <div className={style.option}>
                    <span style={{color:'#E6E6E6'}}> Daxili kredit üçün<a href="#"> müraciət et </a> </span>
                </div>
                <div className={style.verticalLine}></div>

                <div className={style.option}>
                    <RiShieldCheckLine size={22} style={{paddingRight: '8px'}}/><span>1 il zəmanət</span>
                </div>
                <div className={style.verticalLine}></div>
                <div className={style.option}>
                    <LuBox size={22} style={{paddingRight: '8px'}}/><span>Çatdırılma</span>
                </div>
            </div>
        </div>
    );
};


export default Description