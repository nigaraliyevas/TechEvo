import styles from "./Filter.module.scss";
import filterImg from "../../../public/assets/images/FilterSide/filterImg.png";
import PriceRangeSlider from "./components/Slider/Slider";
import Accordion from "./components/Accordion/Accordion";

const FilteredProducts = () => {
  const items = [
    { title: 'Qiymət', content:    <PriceRangeSlider /> },
    { title: 'Bölmə 2', content: 'Bölmə 2-in məzmunu buradadır.' },
    { title: 'Bölmə 3', content: 'Bölmə 3-in məzmunu buradadır.' },
  ];
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
            <Accordion items={items} />
           
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default FilteredProducts;
