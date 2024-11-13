import React, { useState } from 'react'
import style from "./basketItem.module.scss"
import { FaStar } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { decrimentCount, incrementCount, removeCart } from '../../../redux/slices/BasketSlice';
const BasketItems = ({basket}) => {
  const [totalAmount,setTotalAmount] = useState(basket.count)
 
  const counts = basket.map(item => item.count);
    


  const dispatch = useDispatch()
  const deletProduct = (id) => {
    dispatch(removeCart(id));
  };
  const decrementBasketCount = (id) => {
    dispatch(decrimentCount(id));
  };

  const incrementBasketCount = (id) => {
    dispatch(incrementCount(id));
  };
  
  return (
    <div className={style.basket_items}>
      {
        basket.map((item,index)=>(
        <div key={index} className={style.basket_item}>
          <div className={style.basket_image}> 
            <img src={item.imageUrl[0]} alt="" /> 
          </div>
          <div className={style.basket_item_average}>
            <div className={style.item_average_title}>
            {item.name}
            </div>
            <div className={style.item_average_rating}>
              <span className={style.raition_icon}><FaStar size={12}/></span>
              <span className={style.raition_icon}><FaStar size={12}/></span>
              <span className={style.raition_icon}><FaStar size={12}/></span>
              <span className={style.raition_icon}><FaStar size={12}/></span>
              <span className={style.raition_icon}><FaStar size={12}/></span>
              <span className={style.icoun_count}>5.0</span>
            </div>
            <div className={style.amount_price}>
             {item.price} AZN
              </div>
            <div className={style.item_counts}>
              <button onClick={()=>incrementBasketCount(item.id)} className={style.count_button}>
                -
              </button>
              <button className={style.count_button}>
                {item.count}
              </button>
              <button onClick={()=>decrementBasketCount(item.id)} className={style.count_button}>
                +
              </button>

            </div>

          </div>
          <div className={style.basket_item_left}>
            <div onClick={() => deletProduct(item.id)} className={style.item_left_delete}>
              <IoTrashOutline size={20}/>
            </div>
            <div className={style.basket_amounts}>
              <div className={style.amount_name}>
                Toplam :
              </div>
              <div className={style.amount_price}>
              {((item.price * item.count).toFixed(2))} AZN
              </div>

            </div>
          </div>
        </div>

        ))
      }
    </div>
  )
}

export default BasketItems