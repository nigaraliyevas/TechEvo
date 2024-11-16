// styles
import styles from "./OrderDetails.module.scss";
// icons
import leftArrow from "../../assets/images/Orders/arrow-left.svg";
// import { Card } from "@mui/material";
import StarRating from "../Rating/StarRating";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../../redux/sercives/productApi";

const OrderDetails = ( { prods , setShowDetails , selectedItemId, selectedOrderId}) => {
  const [product, setProduct] = useState({});
  const [item, setItem] = useState({});

  const {data, error, isLoading} = useGetProductByIdQuery(selectedItemId);

  useEffect(() => {
    prods.map((order) => {
      if(order.orderId === selectedOrderId) {
        setProduct(order)
        order.orderItems.map((itm) => {
          if(itm.productId === selectedItemId) {
            setItem(itm)
          }
        })
      }
    })
  })

  // get user name surname based on user email(token)
  
  if (isLoading) return "Yüklənir...";
  else if (error) {
    console.log(error)
    if (error.originalStatus === 404) {
      return <div style={{ color: "red", paddingLeft: "12px" }}>Məhsul tapılmadı.</div>;
    } else {
      return <div style={{ color: "red", paddingLeft: "12px" }}>Xəta bas verdi.</div>;
    }
  }
  else console.log(selectedOrderId , selectedItemId , data);


  const handleSendBack = () => {
    setShowDetails(false);
  };

 

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
            Ümumi : <span className={styles.priceSpan}>{`${data.discountPrice ? data.discountPrice * item.quantity : data.price * item.quantity} azn`}</span>
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
            src={data.imageUrl[0]}
            alt=""
          />
        </div>
        {/* right div */}
        <div>
          <div className={styles.productName}>
            {data.name}
          </div>
          {/* for displaying stars use mui */}
          <div className={styles.ratingCont}>
            <div>
              <StarRating value = {data.rating} />
            </div>
          </div>
          <span className={styles.priceSpan}>{`${data.discountPrice ? data.discountPrice : data.price} AZN`}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
