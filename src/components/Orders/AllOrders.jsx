// styles
import styles from "./AllOrders.module.scss";
// icons
import tickSquare from "../../assets/images/Orders/tick-square.svg";
import rightArrow from "../../assets/images/Orders/arrow-right.svg";
// import truckIcon from "../../assets/images/Orders/truck.svg";
import NoOrder from "./NoOrder";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";
import { useMediaQuery } from "react-responsive";
// import {
//   useGetOrderQuery,
//   useGetOrdersQuery,
// } from "../../redux/sercives/orderApi";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 601 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return isMobile ? children : null;
};

const AllOrders = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const {
    data: ordersData,
    error: ordersError,
    isLoading: ordersLoading,
  } = useGetOrdersQuery();
  // const {
  //   data: userOrders,
  //   error: userOrdersError,
  //   isLoading: userOrdersLoading,
  // } = useGetOrderQuery();
  // const productIds = ordersData?.flatMap(order => order.orderItems.map(item => item.productId)) || [];
  const serverUrl = import.meta.env.VITE_SOME_KEY;
  // Get all productIds from the ordersData
  const getProductIds = () => {
    if (ordersData && ordersData.length > 0 && !ordersError && !ordersLoading) {
      return ordersData.flatMap((order) =>
        order.orderItems.map((item) => item.productId)
      );
    }
    return []; // Return an empty array if no valid data
  };

  const productIds = getProductIds();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (productIds.length > 0) {
        try {
          // Create a list of promises to fetch product data for each ID
          const productPromises = productIds.map((id) =>
            fetch(`${serverUrl}product/${id}`).then((res) => res.json())
          );
          console.log(productPromises);
          // Wait for all the promises to resolve
          const productResults = await Promise.all(productPromises);
          console.log(productResults);
          // Update state with the fetched products
          setProductsData(productResults);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProducts();
  }, [ordersData]);

  if (ordersError) {
    return <div>Giriş etdikdən sonra səhifəni yenidən yükləyin</div>;
  } else if (ordersLoading) {
    return <div> Yüklənir...</div>;
  } else console.log(ordersData);
  const handleDetails = (itemId, orderId) => {
    setSelectedItemId(itemId);
    setSelectedOrderId(orderId);
    setShowDetails(true);
  };

  return (
    <div>
      <Desktop>
        <div className={styles.allOrders}>
          {/* Deatils of the clicked product */}
          {showDetails ? (
            <OrderDetails
              prods={ordersData}
              selectedOrderId={selectedOrderId}
              selectedItemId={selectedItemId}
              setShowDetails={setShowDetails}
            />
          ) : (
            <div>
              <div className={styles.heading}>Sifarişlər</div>
              {ordersData && ordersData.length > 0 ? (
                <div className={styles.orderContainers}>
                  {!ordersLoading &&
                    !ordersError &&
                    ordersData.map((order) => {
                      return (
                        <div
                          key={order.orderId}
                          className={styles.orderHistory}
                        >
                          {order.orderItems.map((item) => {
                            const product = productsData.find(
                              (prod) => prod.id === item.productId
                            );
                            console.log(product);
                            // console.log(item.productId)
                            // console.log(productsData)
                            return (
                              <div key={item.id} className={styles.orderCont}>
                                <div className={styles.leftSide}>
                                  <div className={styles.ordersImgCont}>
                                    <img
                                      className={styles.ordersImg}
                                      src={
                                        product?.imageUrl[0] ||
                                        "https://tinyurl.com/54mef8ky"
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <div className={styles.ordrDateAndPrice}>
                                    <div className={styles.date}>
                                      {(() => {
                                        const date = new Date(order.createdAt);

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
                                        const month =
                                          monthNamesAz[date.getMonth()];
                                        const year = date.getFullYear();

                                        // Return formatted date
                                        return `${day} ${month} ${year}`;
                                      })()}
                                    </div>

                                    <div className={styles.date}>
                                      Ümumi :{" "}
                                      <span>
                                        {product?.discountPrice
                                          ? (item.quantity *
                                              Math.floor(
                                                product?.discountPrice * 100
                                              )) /
                                            100
                                          : (item.quantity *
                                              Math.floor(
                                                product?.price * 100
                                              )) /
                                            100}{" "}
                                        azn
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.rightSide}>
                                  <div className={styles.orderNoAndStatus}>
                                    <div className={styles.orderNo}>
                                      Sifariş nömrəsi : {order.orderId}
                                    </div>
                                    <div className={styles.orderStatus}>
                                      <div className={styles.statusIconCont}>
                                        <img
                                          className={styles.statusIcon}
                                          src={tickSquare}
                                          alt="tick square"
                                        />
                                      </div>
                                      <div>{order.orderStatus}</div>
                                    </div>
                                  </div>
                                  <div
                                    onClick={() =>
                                      handleDetails(
                                        item.productId,
                                        order.orderId
                                      )
                                    }
                                    className={styles.orderDetails}
                                  >
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
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              ) : (
                <NoOrder />
              )}
            </div>
          )}
        </div>
      </Desktop>

      <Mobile>
        <div className={styles.allOrders}>
          {/* Deatils of the clicked product */}
          {showDetails ? (
            <OrderDetails
              prods={ordersData}
              selectedOrderId={selectedOrderId}
              selectedItemId={selectedItemId}
              setShowDetails={setShowDetails}
            />
          ) : (
            <div>
              <div className={styles.heading}>Sifarişlər</div>
              {ordersData && ordersData.length > 0 ? (
                <div className={styles.orderContainers}>
                  {!ordersLoading &&
                    !ordersError &&
                    ordersData.map((order) => {
                      return (
                        <div
                          key={order.orderId}
                          className={styles.orderHistory}
                        >
                          {order.orderItems.map((item) => {
                            const product = productsData.find(
                              (prod) => prod.id === item.productId
                            );
                            console.log(product);
                            // console.log(item.productId)
                            // console.log(productsData)
                            return (
                              <div key={item.id} className={styles.orderCont}>
                                <div className={styles.aboveSide}>
                                  <div className={styles.ordrDateAndPrice}>
                                    <div className={styles.date}>
                                      {(() => {
                                        const date = new Date(order.createdAt);

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
                                        const month =
                                          monthNamesAz[date.getMonth()];
                                        const year = date.getFullYear();

                                        // Return formatted date
                                        return `${day} ${month} ${year}`;
                                      })()}
                                    </div>

                                    <div className={styles.price}>
                                      Ümumi :{" "}
                                      <span>
                                        {product?.discountPrice
                                          ? (item.quantity *
                                              Math.floor(
                                                product?.discountPrice * 100
                                              )) /
                                            100
                                          : (item.quantity *
                                              Math.floor(
                                                product?.price * 100
                                              )) /
                                            100}{" "}
                                        azn
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    onClick={() =>
                                      handleDetails(
                                        item.productId,
                                        order.orderId
                                      )
                                    }
                                    className={styles.orderDetails}
                                  >
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
                                <div className={styles.belowSide}>
                                  <div className={styles.ordersImgCont}>
                                    <img
                                      className={styles.ordersImg}
                                      src={
                                        product?.imageUrl[0] ||
                                        "https://tinyurl.com/54mef8ky"
                                      }
                                      alt=""
                                    />
                                  </div>
                                    <div className={styles.orderNoAndStatus}>
                                      <div className={styles.orderNo}>
                                        Sifariş nömrəsi : {order.orderId}
                                      </div>
                                      <div className={styles.orderStatus}>
                                        <div className={styles.statusIconCont}>
                                          <img
                                            className={styles.statusIcon}
                                            src={tickSquare}
                                            alt="tick square"
                                          />
                                        </div>
                                        <div>{order.orderStatus}</div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              ) : (
                <NoOrder />
              )}
            </div>
          )}
        </div>
      </Mobile>
    </div>
  );
};

export default AllOrders;