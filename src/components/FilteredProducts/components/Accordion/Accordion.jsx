import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ReactSlider from "react-slider";
import styles from "./Accordion.module.css";
import { useGetFilterNameWithValuesQuery } from "../../../../redux/sercives/productApi";

const AccordionItem = ({ data, handleFilter, values }) => {

  const [showContent, setShowContent] = useState(true);
  console.log(data);
  console.log(values);
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
        {data}
        {showContent ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
      </div>
      {showContent && (
        <div className={styles.accordion_content}>
          <div id={styles.FilteredProductsSide}>
            <div className={styles.filterItem} style={{ display: "flex", flexDirection: "column" }}  >

              {values.map((v, i) =>
                <div key={i}  style={{ display: "flex" ,alignItems:"center",gap:"10px" ,height:"45px"}} >
                  <input type="checkbox" className={styles.checkbox}
                    onChange={() => handleFilterValueChange(v)}
                  />
                  <span style={{fontSize:"20px"}}>{v}</span>
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

// const Accordion = ({ queries, handleFilter, handlePrice }) => {
//   const [headers, setHeaders] = useState([]);
//   const { data, error, isLoading } = useGetFilterNameWithValuesQuery("Laptop"); // Use the query hook
//   console.log(data);

//   // If the data is successfully fetched, get the keys (headers)
//   useEffect(() => {
//     if (data) {
//       const keys = Object.keys(data); // Extract keys from the data object
//       setHeaders(keys);
//     }
//   }, [data]);

//   if (isLoading) return <div>Yüklənir...</div>; // Loading state
//   if (error) return <div>Xəta baş verdi</div>; // Error state
//   return (
//     <div className={styles.accordion}>
//       <PriceRangeSlider min={200} max={10000} onPriceChange={handlePrice} />{" "}
//       {headers?.map((item, index) => (
//         <AccordionItem key={index} handleFilter={handleFilter} data={item} />
//       ))}
//     </div>
//   );
// };
const Accordion = ({ queries, handleFilter, handlePrice }) => {
  const [headers, setHeaders] = useState([]);
  const { data, error, isLoading } = useGetFilterNameWithValuesQuery("Laptop"); // Use the query hook

  useEffect(() => {
    if (data) {
      const keys = Object.keys(data); // Extract keys (headers) from the data object
      setHeaders(keys);
    }
  }, [data]);

  if (isLoading) return <div>Yüklənir...</div>; // Loading state
  if (error) return <div>Xəta baş verdi</div>; // Error state

  return (
    <div className={styles.accordion}>
      <PriceRangeSlider min={200} max={10000} onPriceChange={handlePrice} />
      {headers?.map((item, index) => {
        const values = data[item]; // Get the values for each header (e.g., "Ölçülər", "Əməliyyat Sistemi")
        return (
          <AccordionItem
            key={index}
            data={item} // Pass header name
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
// onChange={() => handleFilter(item.key, queries.key)}