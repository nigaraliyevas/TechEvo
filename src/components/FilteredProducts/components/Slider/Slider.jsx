import { useState } from "react";
import ReactSlider from "react-slider";
import {  useSelector } from "react-redux";
import styles from "./PriceRangeSlider.module.css";

const PriceRangeSlider = () => {
  const { priceRange } = useSelector((state) => state.filter);
  const [range, setRange] = useState(priceRange);

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleInputChange = (index, value) => {
    const newValue = parseFloat(value);
    if (!isNaN(newValue) && newValue >= 200 && newValue <= 10000) {
      const newRange = [...range];
      newRange[index] = newValue;
      setRange(newRange);
    }
  };

  return (
    <div className={styles.price_range_slider}>
      <div className={styles.inputs}>
        <input
          type="number"
          value={range[0].toFixed(2)}
          onChange={(e) => handleInputChange(0, e.target.value)}
          min="200"
          max="10000"
        />
        <input
          type="number"
          value={range[1].toFixed(2)}
          onChange={(e) => handleInputChange(1, e.target.value)}
        />
      </div>

      <ReactSlider
        value={range}
        onChange={handleSliderChange}
        min={200}
        max={10000}
        step={0.01}
        minDistance={10}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
      />
    </div>
  );
};

export default PriceRangeSlider;
