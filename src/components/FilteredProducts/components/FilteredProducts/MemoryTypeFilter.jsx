import { useDispatch, useSelector } from "react-redux";
import styles from "./FilteredProducts.module.scss";
import { toggleMemoryType } from "../../../../redux/slices/FilterSlice";

const MemoryTypeFilter = () => {
  const dispatch = useDispatch();
  const { selectedMemoryTypes } = useSelector((state) => state.filter);

  const memoryTypes = ["SSD", "HDD"];

  const handleCheckboxChange = (memoryType) => {
    dispatch(toggleMemoryType(memoryType));
  };

  return (
    <div id={styles.FilteredProductsSide}>
      {memoryTypes.map((memoryType) => (
        <div className={styles.filterItem} key={memoryType}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedMemoryTypes.includes(memoryType)}
            onChange={() => handleCheckboxChange(memoryType)}
          />
          <p>{memoryType}</p>
        </div>
      ))}
    </div>
  );
};

export default MemoryTypeFilter;
