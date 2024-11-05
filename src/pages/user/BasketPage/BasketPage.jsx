import style from "./Basket.module.scss"
import BasketItems from '../../../components/Basket/BsketItemPage/BasketItems'
import BasketTotalAmount from '../../../components/Basket/BasketTotalItemPage/BasketTotalAmount'
import empty from '../../../assets/images/Basket/empty.svg'
import { useDispatch, useSelector } from "react-redux"

const BasketPage = () => {
  const {basket} = useSelector((state)=>state.basket)
  
console.log(basket,"basket");

 
  
  return (

    
    <div className={style.conatiner}>
      <h2 className={style.basket_title}>
         Səbət
      </h2>
      {basket.length>0?
      <div>
      <div className={style.basket_items_container}>

     <div className={style.basket_items}>
       <BasketItems basket={basket}/>
     </div>
     <div className={style.basket_total}>
       <BasketTotalAmount />
     </div>
   </div>

      </div>:
      <div className={style.basket_empty_conatiner}>
          <img src={empty} alt="" />
          <h2 className={style.basket_empty_title}>
          Səbət boşdur.
          </h2>
      </div> 
        
      }
    </div>
  )
}

export default BasketPage