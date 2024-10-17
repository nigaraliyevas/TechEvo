import { useEffect, useState } from "react";
import styles from "./Features.module.scss" 
// import env from '../../../src/.env';

const Features = ({id}) => {

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
    fetch(`http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/product/getAllProducts`)
    .then(response => {
        console.log(response)
        if(!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(data => {
            data.map((product) => {
                if(id === product.id) {
                    setProductDetails(
                        {
                            ram: product.specifications[0].ram,
                            weight: product.specifications[0].weight,
                            storage: product.specifications[0].storage,
                            processor: product.specifications[0].processor,
                            dimensions: product.specifications[0].dimensions,
                            screenSize: product.specifications[0].screenSize,
                            graphicsCard: product.specifications[0].graphicsCard,
                            operatingSystem: product.specifications[0].operatingSystem,
                        }
                    )
                }           
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [id])

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
  )
}

export default Features
