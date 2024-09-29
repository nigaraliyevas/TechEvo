import styles from "./Features.module.scss" 

const Features = ({id}) => {

    fetch('https://ff82f4df-f72b-4dec-84ca-487132aff620.mock.pstmn.io/api/v1/product/getAllProducts')
    .then(response => {
        if(!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(data => {
        data.map((product) => {
            if(id === product.id)
            console.log(product.specifications);
        })
    })
    .catch(error => {
        console.error('Error:', error);
    });

  return (
    <div className={styles.ftContainer}>
      <div className={styles.headerText}>Xüsusiyyətlər</div>
      <div className={styles.featuresContainer}>
        <div className={styles.leftBar}>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Prosessor</div>
                <div className={styles.feats}>Exynos</div>
            </div>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Graphics Card</div>
                <div className={styles.feats}>GPU</div>
            </div>
            <div className={styles.ftRows}>
                <div className={styles.featName}>RAM</div>
                <div className={styles.feats}>16 GB </div>
            </div>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Storage</div>
                <div className={styles.feats}>512 GB NVMe SSD</div>
            </div>
        </div>
        <div className={styles.rightBar}>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Screen Size</div>
                <div className={styles.feats}>13.3 inches</div>
            </div>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Operating System</div>
                <div className={styles.feats}>macOS Ventura</div>
            </div>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Weight</div>
                <div className={styles.feats}>12.2 x 8.4 x 0.6 inches</div>
            </div>
            <div className={styles.ftRows}>
                <div className={styles.featName}>Weight</div>
                <div className={styles.feats}>2.8 lbs (1.27 kg)</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
