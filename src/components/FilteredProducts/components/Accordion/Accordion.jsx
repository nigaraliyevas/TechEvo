import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ReactSlider from "react-slider";
import styles from "./Accordion.module.css";

const AccordionItem = ({ data, handleFilter }) => {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={() => setShowContent(!showContent)}>
        {data.title}
        {showContent ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
      </div>
      {showContent && (
        <div className={styles.accordion_content}>
          <div id={styles.FilteredProductsSide}>
            {data.options.map((item, index) => (
              <div className={styles.filterItem} key={index}>
                <input type="checkbox" className={styles.checkbox} onChange={() => handleFilter(item.key, data.key)} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PriceRangeSlider = ({ min, max, onPriceChange }) => {
  const [showContent, setShowContent] = useState(true);

  const [range, setRange] = useState([min, max]);

  const handleSliderChange = (newRange) => {
    if (newRange[0] < newRange[1]) {
      setRange(newRange);
      onPriceChange({ min: newRange[0], max: newRange[1] });
    }
  };

  const handleInputChange = (index, value) => {
    const newValue = parseInt(value, 10) || 0;
    const newRange = [...range];
    newRange[index] = newValue;


    if (newRange[0] < newRange[1] && newValue >= min && newValue <= max) {
      handleSliderChange(newRange);
    }
  };

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={() => setShowContent(!showContent)}>
        <div>Qiymət</div>
        {showContent ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
      </div>
      {showContent && (
        <div className={styles.accordion_content}>
          <div className={styles.priceRangeSlider}>
            <div className={styles.inputs}>
              <input type="number" value={range[0]} min={min} max={max} onChange={e => handleInputChange(0, e.target.value)} />
              <input type="number" value={range[1]} min={min} max={max} onChange={e => handleInputChange(1, e.target.value)} />
            </div>

            <ReactSlider value={range} onChange={handleSliderChange} step={1} min={min} max={max} minDistance={10} thumbClassName={styles.thumb} trackClassName={styles.track} />
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ data, handleFilter, handlePrice }) => {
  return (
    <div className={styles.accordion}>
      <PriceRangeSlider min={200} max={10000} onPriceChange={handlePrice} />{" "}
      {data.map(item => (
        <AccordionItem handleFilter={handleFilter} key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Accordion;
