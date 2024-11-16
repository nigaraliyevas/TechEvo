// styles
import styles from "./OrderDetails.module.scss";
// icons
import leftArrow from "../../assets/images/Orders/arrow-left.svg";
// import { Card } from "@mui/material";
import StarRating from "../Rating/StarRating";
import { useGetOrdersQuery } from "../../redux/sercives/orderApi";
import { useEffect, useState } from "react";

const OrderDetails = ( { setShowDetails , selectedItemId, selectedOrderId}) => {
  const [product, setProduct] = useState({});
  const [item, setItem] = useState({});


  const { data, error, isLoading } = useGetOrdersQuery();
  if (isLoading) return "Loading...";
  else if (error) console.log(error);
  else console.log(selectedOrderId , selectedItemId, data);
  const handleSendBack = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    data.map((order) => {
      if(order.orderId === selectedOrderId) {
        setProduct(order)
        order.orderItems.map((itm) => {
          if(itm.id === selectedItemId) {
            setItem(itm)
          }
        })
      }
    })
  })

  return (
    <div className={styles.detailsCont}>
      <div className={styles.headingCont}>
        <div onClick={handleSendBack} className={styles.leftArrowCont}>
          <img
            className={styles.leftArrowIcon}
            src={leftArrow}
            alt="left arrow"
          />
        </div>
        <div>Təfərrüatlar</div>
      </div>

      <div className={styles.infoCont}>
        <div className={styles.infoLeft}>
          <div>Sifariş nömrəsi : {product.orderId}</div>
          <div>Sifariş tarixi : {`${product.day} ${product.month} ${product.year}`}</div>
          <div>{`Sifariş xülasəsi : ${item.quantity} məhsul`}</div>
          <div>
            Sifariş statusu :{" "}
            <span className={styles.statusSpan}>{product.orderStatus}</span>
          </div>
          <div>
            Ümumi : <span className={styles.priceSpan}>{`${item.quantity * item.price} azn`}</span>
          </div>
        </div>
        <div className={styles.infoRight}>
          <div>Alıcı : Fidan Salayeva</div>
          <div>{`Şəhər : ${product.address?.city || "N/A"}`}</div>
          <div>{`Məntəqə : ${product.address?.area || "N/A"}`}</div>
          <div>{`Küçə : ${product.address?.street || "N/A"}`}</div>
          <div>{`Mənzil : ${product.address?.building || "N/A"}`}</div>
        </div>
      </div>

      <div className={styles.subHead}>Məhsul</div>
      <div className={styles.productCont}>
        <div className={styles.productImgCont}>
          <img
            className={styles.productImg}
            src="https://tinyurl.com/54mef8ky"
            alt=""
          />
        </div>
        {/* right div */}
        <div>
          <div className={styles.productName}>
            Notbuk Asus ROG Strix Scar 18 G834JY-N6038 90NR0CG1-M00300
          </div>
          {/* for displaying stars use mui */}
          <div className={styles.ratingCont}>
            <div>
              <StarRating value = {3} />
            </div>
          </div>
          <span className={styles.priceSpan}>{`${item.price} AZN`}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
