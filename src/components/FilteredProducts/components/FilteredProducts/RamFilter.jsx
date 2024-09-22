import { useDispatch, useSelector } from "react-redux";
import styles from "./FilteredProducts.module.scss";
import { toggleRAM } from "../../../../redux/slices/FilterSlice";

const RAMFilter = () => {
  const dispatch = useDispatch();
  const { selectedRAMs } = useSelector((state) => state.filter);

  const rams = ["4 GB", "8 GB", "16 GB", "32 GB"];

  const handleCheckboxChange = (ram) => {
    dispatch(toggleRAM(ram));
  };

  return (
    <div id={styles.FilteredProductsSide}>
      {rams.map((ram) => (
        <div className={styles.filterItem} key={ram}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedRAMs.includes(ram)}
            onChange={() => handleCheckboxChange(ram)}
          />
          <p>{ram}</p>
        </div>
      ))}
    </div>
  );
};

export default RAMFilter;
