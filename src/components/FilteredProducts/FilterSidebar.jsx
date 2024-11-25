import styles from "./Filter.module.scss";
import filterImg from "../../assets/images/FilterSide/filterImg.svg";
// import PriceRangeSlider from "./components/Slider/Slider";
import Accordion from "./components/Accordion/Accordion";


const FilterSidebar = ({queries , handleFilter , handlePrice,handleFilterItem}) => {

  return (
    <main>
      <section id={styles.filterSide}>
        <div className={styles.filterSide}>
          <div>
            <div className={styles.head}>
              <div>
                <p className={styles.text}>Filter</p>
              </div>
              <div className={styles.filterImg}>
                <img src={filterImg} />
              </div>
            </div>

            <Accordion handleFilterItem = {handleFilterItem} handleFilter={handleFilter} handlePrice={handlePrice} queries={queries} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FilterSidebar;