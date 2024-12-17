import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ReactSlider from "react-slider";
import styles from "./Accordion.module.scss";
import { useGetFilterNameWithValuesQuery } from "../../../../redux/sercives/productApi";

const AccordionItem = ({ queries, handleFilter, values, handleFilterItem }) => {

  const [showContent, setShowContent] = useState(false);
  // console.log(queries);
  // console.log(values);
  const [filterValue, setFilterValue] = useState('');

  const handleFilterValueChange = (value) => {
    setFilterValue((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((v) => v !== value) // Əgər seçilibsə, çıxar
        : [...prevValues, value] // Əgər seçilməyibsə, əlavə et
    );
  };

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={() => setShowContent(!showContent)}>
        {queries}
        {showContent ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
      </div>
      {showContent && (
        <div className={styles.accordion_content}>
          <div id={styles.FilteredProductsSide}>
            <div className={styles.filterItem} style={{ display: "flex", flexDirection: "column" }}  >

              {values.map((v, i) =>
                <div key={i} style={{ height: "65px" }} >
                  <div style={{display:"flex"}}>
                    <div>
                      <input type="checkbox" className={styles.checkbox}
                        onChange={() => {
                          handleFilterValueChange(v)
                          handleFilterItem(v);
                        }}
                      />
                    </div>
                    <div>
                      <p style={{ marginLeft: "10px", fontSize: "17px" }}>{v}</p>
                    </div>
                  </div>
                </div>
              )
              }
            </div>
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



const Accordion = ({ queries, handleFilter, handlePrice, handleFilterItem }) => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (queries) {
      const keys = Object.keys(queries); // Extract keys (headers) from the queries object
      setHeaders(keys);
    }
  }, [queries]);

  return (
    <div className={styles.accordion}>
      <PriceRangeSlider min={200} max={10000} onPriceChange={handlePrice} />
      {headers?.map((item, index) => {
        const values = queries[item]; // Get the values for each header (e.g., "Ölçülər", "Əməliyyat Sistemi")
        return (
          <AccordionItem
            handleFilterItem={(value) => handleFilterItem(item, value)}
            key={index}
            queries={item} // Pass header name
            handleFilter={handleFilter} // Pass the filter handler
            values={values} // Pass the filter values
            queryKey={item} // Pass the key as query key (e.g., "Əməliyyat Sistemi")
          />
        );
      })}
    </div>
  );
};

export default Accordion;