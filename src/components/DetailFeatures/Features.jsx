import { useEffect, useState } from "react";
import styles from "./Features.module.scss";
// import env from '../../../src/.env';

const Features = ({ id }) => {
  

 
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    fetch(
      `http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/product/getAll`
    )
      .then((response) => {
        console.log('response is',response);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched datra: ", data);
        
        data.map((product) => {
          if (id === product.id) {
            console.log(product.id)
            setProductDetails({
              ram: product.specifications.ram,
              weight: product.specifications.weight,
              storage: product.specifications.storage,
              processor: product.specifications.processor,
              dimensions: product.specifications.dimensions,
              screenSize: product.specifications.screenSize,
              graphicsCard: product.specifications.graphicsCard,
              operatingSystem: product.specifications.operatingSystem,
            });
          }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <div className={styles.ftContainer}>
      <div className={styles.headerText}>Xüsusiyyətlər</div>
      <div className={styles.featuresContainer}>
        <div className={styles.leftBar}>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Prosessor</div>
            <div className={styles.feats}>{productDetails.processor}</div>
          </div>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Graphics Card</div>
            <div className={styles.feats}>{productDetails.graphicsCard}</div>
          </div>
          <div className={styles.ftRows}>
            <div className={styles.featName}>RAM</div>
            <div className={styles.feats}>{productDetails.ram}</div>
          </div>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Storage</div>
            <div className={styles.feats}>{productDetails.storage}</div>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Screen Size</div>
            <div className={styles.feats}>{productDetails.screenSize}</div>
          </div>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Operating System</div>
            <div className={styles.feats}>{productDetails.operatingSystem}</div>
          </div>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Dimensions</div>
            <div className={styles.feats}>{productDetails.dimensions}</div>
          </div>
          <div className={styles.ftRows}>
            <div className={styles.featName}>Weight</div>
            <div className={styles.feats}>{productDetails.weight}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
