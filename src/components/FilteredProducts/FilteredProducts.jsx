import styles from "./Filter.module.scss";
import filterImg from "../../../public/assets/images/FilterSide/filterImg.png";

const FilteredProducts = () => {
  return (
    <main>
      <section id={styles.filterSide}>
        <div className={styles.filterSide}>
          <div className={styles.filterSide_container}>
            <div className={styles.head}>
              <div>
                <p className={styles.text}>Filtr</p>
              </div>
              <div>
                <img src={filterImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FilteredProducts;
