import  { useState } from 'react';
import ReactSlider from 'react-slider';
import styles from './PriceRangeSlider.module.css';

const PriceRangeSlider = () => {
  const [range, setRange] = useState([200, 10000]);

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleInputChange = (index, value) => {
    const newValue = Number(value);
    if (!isNaN(newValue)) {
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
          value={range[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
        />
        <input
          type="number"
          value={range[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
        />
      </div>
      <ReactSlider
        value={range}
        onChange={handleSliderChange}
        min={200}
        max={10000}
        step={1}
        minDistance={10}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
      />
    </div>
  );
};

export default PriceRangeSlider;