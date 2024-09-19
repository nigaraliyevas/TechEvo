import styles from "./Filter.module.scss";
import filterImg from "../../../public/assets/images/FilterSide/filterImg.png";
import PriceRangeSlider from "./components/Slider/Slider";
import Accordion from "./components/Accordion/Accordion";
import CategoryFilter from "./components/FilteredProducts/CategoryFilter";
import BrendFilter from "./components/FilteredProducts/BrendFilter";
import ProsessorFilter from "./components/FilteredProducts/ProsessorFilter";
import VideoCardFilter from "./components/FilteredProducts/VideoCardFilter";
import RamFilter from "./components/FilteredProducts/RamFilter";
import MemoryTypeFilter from "./components/FilteredProducts/MemoryTypeFilter";

const FilteredProducts = () => {
  const items = [
    { title: "Qiymət", content: <PriceRangeSlider /> },
    { title: "Kategoriya", content: <CategoryFilter /> },
    { title: "Brend", content: <BrendFilter /> },
    { title: "Prosessor", content: <ProsessorFilter /> },
    { title: "Videokart", content: <VideoCardFilter /> },
    { title: "Operativ yaddaş", content: <RamFilter /> },
    { title: "Yaddaş növü", content: <MemoryTypeFilter /> },
  ];
  return (
    <main>
      <section id={styles.filterSide}>
        <div className={styles.filterSide}>
          <div>
            <div className={styles.head}>
              <div>
                <p className={styles.text}>Filtr</p>
              </div>
              <div className={styles.filterImg}>
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
