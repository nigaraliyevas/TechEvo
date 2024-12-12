// styles
import styles from "./OrderDetails.module.scss";
// icons
import leftArrow from "../../assets/images/Orders/arrow-left.svg";
// import { Card } from "@mui/material";
import StarRating from "../Rating/StarRating";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../../redux/sercives/productApi";
import { useGetUserQuery } from "../../redux/sercives/userApi";

const OrderDetails = ({
  prods,
  setShowDetails,
  selectedItemId,
  selectedOrderId,
}) => {
  const [product, setProduct] = useState({});
  const [item, setItem] = useState({});

  const { data, error, isLoading } = useGetProductByIdQuery(selectedItemId);
  const {
    data: user,
    error: userError,
    isLoading: userLoading,
  } = useGetUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });
  useEffect(() => {
    prods.map((order) => {
      if (order.orderId === selectedOrderId) {
        setProduct(order);
        order.orderItems.map((itm) => {
          if (itm.productId === selectedItemId) {
            setItem(itm);
          }
        });
      }
    });
  });

  if (isLoading) return "Yüklənir...";
  else if (error) {
    console.log(error);
    if (error.originalStatus === 404) {
      return (
        <div style={{ color: "red", paddingLeft: "12px" }}>
          Məhsul tapılmadı.
        </div>
      );
    } else {
      return (
        <div style={{ color: "red", paddingLeft: "12px" }}>Xəta bas verdi.</div>
      );
    }
  }

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
          <div>
            Sifariş tarixi :{" "}
            {(() => {
              const date = new Date(product.createdAt);

              // Azerbaijani month names
              const monthNamesAz = [
                "yanvar",
                "fevral",
                "mart",
                "aprel",
                "may",
                "iyun",
                "iyul",
                "avqust",
                "sentyabr",
                "oktyabr",
                "noyabr",
                "dekabr",
              ];

              // Extract day, month, and year
              const day = date.getDate();
              const month = monthNamesAz[date.getMonth()];
              const year = date.getFullYear();

              // Return formatted date
              return `${day} ${month} ${year}`;
            })()}
          </div>
          <div>{`Sifariş xülasəsi : ${item.quantity} məhsul`}</div>
          <div>
            Sifariş statusu :{" "}
            <span className={styles.statusSpan}>{product.orderStatus}</span>
          </div>
          <div>
            Ümumi :{" "}
            <span className={styles.priceSpan}>{`${
              data.discountPrice
                ? (item.quantity * Math.floor(data.discountPrice * 100)) / 100
                : (item.quantity * Math.floor(data.price * 100)) / 100
            } azn`}</span>
          </div>
        </div>
        <div className={styles.infoRight}>
          <div>{`Alıcı : ${user?.firstName} ${user?.lastName}`}</div>
          <div>{`Şəhər : ${product.address?.city || "N/A"}`}</div>
          <div>{`Məntəqə : ${product.address?.area || "N/A"}`}</div>
          <div>{`Küçə : ${product.address?.street || "N/A"}`}</div>
          <div>{`Mənzil : ${product.address?.building || "N/A"}`}</div>
        </div>
      </div>

      <div className={styles.subHead}>Məhsul</div>
      <div className={styles.productCont}>
        <div className={styles.productImgCont}>
          <img className={styles.productImg} src={data.imageUrl[0]} alt="" />
        </div>
        {/* right div */}
        <div>
          <div className={styles.productName}>{data.name}</div>
          {/* for displaying stars use mui */}
          <div className={styles.ratingCont}>
            <div>
              <StarRating value={data.rating} />
            </div>
          </div>
          <span className={styles.priceSpan}>{`${
            data.discountPrice ? data.discountPrice : data.price
          } AZN`}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
