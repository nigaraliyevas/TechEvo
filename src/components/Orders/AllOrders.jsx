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
import { useGetOrdersQuery } from "../../redux/sercives/orderApi";
import { useGetProductByIdQuery } from "../../redux/sercives/productApi";
import { skipToken } from "@reduxjs/toolkit/query";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
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
  // const productIds = ordersData?.flatMap(order => order.orderItems.map(item => item.productId)) || [];
  
   // Get all productIds from the ordersData
   const getProductIds = () => {
    if (ordersData && ordersData.length > 0 && !ordersError && !ordersLoading) {
      return ordersData.flatMap(order =>
        order.orderItems.map(item => item.productId)
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
          const productPromises = productIds.map(id =>
            fetch(`http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/product/${id}`).then(res => res.json()) // Replace with your API call
          );
          // Wait for all the promises to resolve
          const productResults = await Promise.all(productPromises);

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
    return <div> Xəta bas verdi</div>;
  } else if (ordersLoading) {
    return <div> Yüklənir...</div>;
  }
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

              {/* OrderContainers will be mapped here */}
              <div className={styles.orderContainers}>
                {!ordersLoading &&
                  !ordersError &&
                  ordersData.map((order) => {
                    return (
                      <div key={order.orderId} className={styles.orderHistory}>
                        {order.orderItems.map((item) => {
                           const product = productsData.find((prod) => prod.id === item.productId);
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
                                    {`${order.day} ${order.month} ${order.year}`}
                                  </div>
                                  <div className={styles.date}>
                                    Ümumi :{" "}
                                    <span>
                                      {product?.discountPrice ? item.quantity * Math.floor(product?.discountPrice * 100) / 100 : item.quantity * Math.floor(product?.price * 100) / 100} azn
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
                                    handleDetails(item.productId, order.orderId)
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

              {/* If no orders are there */}
              {/* <NoOrder /> */}
            </div>
          )}
        </div>
      </Desktop>

      <Mobile>
        <div className={styles.mobileCont}>
          <div>Sifarişlər</div>
          <div>
            {/* Products will be mapped here */}
            <div>
              <div>
                <div>
                  <div>11 oktyabr 2024</div>
                  <div>Ümumi : 2500 azn</div>
                </div>
                <div>
                  <div>Təfərrüatlar</div>
                  <div>
                    <img src={rightArrow} alt="right arrow" />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  {/* <img src="https://tinyurl.com/54mef8ky" alt="product image" /> */}
                </div>
                <div>
                  <div>Sifariş nömrəsi : 1234</div>
                  <div>
                    <div>
                      <img src={tickSquare} alt="tick square icon" />
                    </div>
                    <div>Çatdırıldı </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default AllOrders;
