import { useDispatch, useSelector } from "react-redux";
import styles from "./FilteredProducts.module.scss";
import { toggleProcessor } from "../../../../redux/slices/FilterSlice";

const ProcessorFilter = () => {
  const dispatch = useDispatch();
  const { selectedProcessors } = useSelector((state) => state.filter);

  const processors = ["Intel Core i5", "AMD Ryzen 5", "Apple Silicon"];

  const handleCheckboxChange = (processor) => {
    dispatch(toggleProcessor(processor));
  };

  return (
    <div id={styles.FilteredProductsSide}>
      {processors.map((processor) => (
        <div className={styles.filterItem} key={processor}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedProcessors.includes(processor)}
            onChange={() => handleCheckboxChange(processor)}
          />
          <p>{processor}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessorFilter;
