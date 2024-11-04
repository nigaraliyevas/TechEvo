// styles
import styles from "./OrderDetails.module.scss";
// icons
import leftArrow from "../../assets/images/Orders/arrow-left.svg";
import { Card } from "@mui/material";
import StarRating from "../Rating/StarRating";

const OrderDetails = ( { setShowDetails }) => {
  
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
          <div>Sifariş nömrəsi : 1234</div>
          <div>Sifariş tarixi : 11 okytabr 2024</div>
          <div>Sifariş xülasəsi : 1 məhsul</div>
          <div>
            Sifariş statusu :{" "}
            <span className={styles.statusSpan}>göndərilib</span>
          </div>
          <div>
            Ümumi : <span className={styles.priceSpan}>2500 azn</span>
          </div>
        </div>
        <div className={styles.infoRight}>
          <div>Alıcı : Fidan Salayeva</div>
          <div>Şəhər : Bakı</div>
          <div>Məntəqə : Yasamal</div>
          <div>Küçə : Dadaş Bünyadzadə 11 D</div>
          <div>Mənzil : 15</div>
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
              <StarRating value = {5} />
            </div>
            <span className={styles.ratingSpan}>5.0</span>
          </div>
          <span className={styles.priceSpan}>2500 AZN</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
