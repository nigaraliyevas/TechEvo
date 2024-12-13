import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss";
import { useGetProductByIdQuery } from "../../redux/sercives/productApi";

const Features = ({ id }) => {
  const [features, setFeatures] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const refs = useRef([]);

  const { data, error, isLoading } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (data && data.specifications) {
      const specifications = data.specifications;
      const featureArray = Object.entries(specifications).map(([key, value]) => ({
        name: key,
        value: value,
      }));

      setFeatures(featureArray);
    }
  }, [data]);

  const isOverflowing = (el) => {
    return el.scrollWidth > el.clientWidth;
  };

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref && isOverflowing(ref)) {
        ref.classList.add(styles.overflow);
      }
    });
  }, [features]);

  if (isLoading) {
    // console.log("Loading data...");
  } else if (error) {
    console.log("Error fetching data:", error);
  }

  const totalFeatures = features.length;
  const isOdd = totalFeatures % 2 !== 0;
  const middleIndex = isOdd ? Math.floor(totalFeatures / 2) : totalFeatures / 2;

  const leftFeatures = features.slice(0, middleIndex);
  const rightFeatures = features.slice(middleIndex, isOdd ? totalFeatures - 1 : totalFeatures);
  const lastFeature = isOdd ? features[totalFeatures - 1] : null;

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Helper function to render values correctly
  const renderValue = (value) => {
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2); // Convert object to string for display
    }
    return value; // For primitive types like string, number, etc.
  };

  return (
    <div className={styles.ftContainer}>
      <div className={styles.headerText}>Xüsusiyyətlər</div>
      <div className={styles.featuresContainer}>
        <div className={styles.leftBar}>
          {leftFeatures.map((feature, index) => (
            <div className={styles.ftRows} key={index}>
              <div className={styles.featName}>{feature.name}</div>
              <div className={styles.feats}>{renderValue(feature.value)}</div>
            </div>
          ))}
        </div>
        <div className={styles.rightBar}>
          {rightFeatures.map((feature, index) => (
            <div className={styles.ftRows} key={index}>
              <div className={styles.featName}>{feature.name}</div>
              <div
                className={`${styles.feats} ${expandedIndex === index ? styles.expanded : ""}`}
                ref={(el) => (refs.current[index] = el)}
                onClick={() => handleToggleExpand(index)}
              >
                {renderValue(feature.value)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {lastFeature && (
        <div className={styles.fullWidthRow}>
          <div className={styles.featName}>{lastFeature.name}</div>
          <div className={styles.feats}>{renderValue(lastFeature.value)}</div>
        </div>
      )}
    </div>
  );
};

export default Features;
