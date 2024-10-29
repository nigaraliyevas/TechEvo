// styles
import styles from "./AllOrders.module.scss";
// icons
import tickSquare from "../../assets/images/Orders/tick-square.svg";
import rightArrow from "../../assets/images/Orders/arrow-right.svg";
import truckIcon from "../../assets/images/Orders/truck.svg";
import NoOrder from "./NoOrder";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllOrders = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className={styles.allOrders}>
      

      {/* Deatils of the clicked product */}
      {showDetails ? (
        <div>Salam</div>
      ) : (
        <div>
          <div className={styles.heading}>Sifarişlər</div>
          <div className={styles.orderHistory}>
            {/* OrderContainers will be mapped here */}

            <div className={styles.orderCont}>
              <div className={styles.leftSide}>
                <div className={styles.ordersImgCont}>
                  <img
                    className={styles.ordersImg}
                    src="https://tinyurl.com/54mef8ky"
                    alt=""
                  />
                </div>
                <div className={styles.ordrDateAndPrice}>
                  <div className={styles.date}>11 oktyabr 2024</div>
                  <div className={styles.date}>
                    Ümumi : <span>2500 azn</span>
                  </div>
                </div>
              </div>

              <div className={styles.rightSide}>
                <div className={styles.orderNoAndStatus}>
                  <div className={styles.orderNo}>Sifariş nömrəsi : 1234</div>
                  <div className={styles.orderStatus}>
                    <div className={styles.statusIconCont}>
                      <img
                        className={styles.statusIcon}
                        src={tickSquare}
                        alt="tick square"
                      />
                    </div>
                    <div>Çatdırıldı</div>
                  </div>
                </div>
                <div onClick={handleDetails} className={styles.orderDetails}>
                  <div>Təfərrüatlar</div>
                  <div className={styles.deatilsIconCont}>
                    <img
                      className={styles.detailsIcon}
                      src={rightArrow}
                      alt="right arrow"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.orderCont}>
              <div className={styles.leftSide}>
                <div className={styles.ordersImgCont}>
                  <img
                    className={styles.ordersImg}
                    src="https://tinyurl.com/54mef8ky"
                    alt=""
                  />
                </div>
                <div className={styles.ordrDateAndPrice}>
                  <div className={styles.date}>11 oktyabr 2024</div>
                  <div className={styles.date}>
                    Ümumi : <span>2500 azn</span>
                  </div>
                </div>
              </div>

              <div className={styles.rightSide}>
                <div className={styles.orderNoAndStatus}>
                  <div className={styles.orderNo}>Sifariş nömrəsi : 1234</div>
                  <div className={styles.orderStatus}>
                    <div className={styles.statusIconCont}>
                      <img
                        className={styles.statusIcon}
                        src={truckIcon}
                        alt="tick square"
                      />
                    </div>
                    <div>Göndərilib</div>
                  </div>
                </div>
                <div className={styles.orderDetails}>
                  <div>Təfərrüatlar</div>
                  <div className={styles.deatilsIconCont}>
                    <img
                      className={styles.detailsIcon}
                      src={rightArrow}
                      alt="right arrow"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* If no orders are there */}
            {/* <NoOrder /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllOrders;
