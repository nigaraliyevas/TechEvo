import React, { useState } from 'react'
import style from "./basketItem.module.scss"
import { FaStar } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
const BasketItems = () => {
  let [count,setCount] = useState(0)
  function decriment() {
    setCount(count+1)
  }
  function increment() {
    if (count>0) {
      setCount(count-1)
      
    }
  }
  return (
    <div className={style.basket_items}>
        <div className={style.basket_item}>
          <div className={style.basket_image}> 
            <img src="" alt="" />
          </div>
          <div className={style.basket_item_average}>
            <div className={style.item_average_title}>
            Notbuk Asus ROG Strix Scar 18 G834JY-N6038 90NR0CG1-M00300
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
              2500 AZN
              </div>
            <div className={style.item_counts}>
              <button onClick={()=>increment()} className={style.count_button}>
                -
              </button>
              <button className={style.count_button}>
                {count}
              </button>
              <button onClick={()=>decriment()} className={style.count_button}>
                +
              </button>

            </div>

          </div>
          <div className={style.basket_item_left}>
            <div className={style.item_left_delete}>
              <IoTrashOutline size={20}/>
            </div>
            <div className={style.basket_amounts}>
              <div className={style.amount_name}>
                Toplam :
              </div>
              <div className={style.amount_price}>
              5000 AZN
              </div>

            </div>
          </div>
        </div>
        <div className={style.basket_item}>
          <div className={style.basket_image}> 
            <img src="" alt="" />
          </div>
          <div className={style.basket_item_average}>
            <div className={style.item_average_title}>
            Notbuk Asus ROG Strix Scar 18 G834JY-N6038 90NR0CG1-M00300
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
              2500 AZN
              </div>
            <div className={style.item_counts}>
              <button className={style.count_button}>
                -
              </button>
              <button className={style.count_button}>
                2
              </button>
              <button className={style.count_button}>
                +
              </button>

            </div>

          </div>
          <div className={style.basket_item_left}>
            <div className={style.item_left_delete}>
              <IoTrashOutline size={20}/>
            </div>
            <div className={style.basket_amounts}>
              <div className={style.amount_name}>
                Toplam :
              </div>
              <div className={style.amount_price}>
              5000 AZN
              </div>

            </div>
          </div>
        </div>
        <div className={style.basket_item}>
          <div className={style.basket_image}> 
            <img src="" alt="" />
          </div>
          <div className={style.basket_item_average}>
            <div className={style.item_average_title}>
            Notbuk Asus ROG Strix Scar 18 G834JY-N6038 90NR0CG1-M00300
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
              2500 AZN
              </div>
            <div className={style.item_counts}>
              <button className={style.count_button}>
                -
              </button>
              <button className={style.count_button}>
                2
              </button>
              <button className={style.count_button}>
                +
              </button>

            </div>

          </div>
          <div className={style.basket_item_left}>
            <div className={style.item_left_delete}>
              <IoTrashOutline size={20}/>
            </div>
            <div className={style.basket_amounts}>
              <div className={style.amount_name}>
                Toplam :
              </div>
              <div className={style.amount_price}>
              5000 AZN
              </div>

            </div>
          </div>
        </div>
        <div className={style.basket_item}>
          <div className={style.basket_image}> 
            <img src="" alt="" />
          </div>
          <div className={style.basket_item_average}>
            <div className={style.item_average_title}>
            Notbuk Asus ROG Strix Scar 18 G834JY-N6038 90NR0CG1-M00300
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
              2500 AZN
              </div>
            <div className={style.item_counts}>
              <button className={style.count_button}>
                -
              </button>
              <button className={style.count_button}>
                2
              </button>
              <button className={style.count_button}>
                +
              </button>

            </div>

          </div>
          <div className={style.basket_item_left}>
            <div className={style.item_left_delete}>
              <IoTrashOutline size={20}/>
            </div>
            <div className={style.basket_amounts}>
              <div className={style.amount_name}>
                Toplam :
              </div>
              <div className={style.amount_price}>
              5000 AZN
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default BasketItems