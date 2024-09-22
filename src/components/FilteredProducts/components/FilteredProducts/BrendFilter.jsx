import { useDispatch, useSelector } from "react-redux";
import styles from "./FilteredProducts.module.scss";
import { toggleBrand } from "../../../../redux/slices/FilterSlice";

const BrendFilter = () => {
  const dispatch = useDispatch();
  const { selectedBrands } = useSelector((state) => state.filter);

  const brands = ["hp", "acer", "lenovo", "toshiba", "asus"];

  const handleCheckboxChange = (brand) => {
    dispatch(toggleBrand(brand));
  };

  return (
    <div id={styles.FilteredProductsSide}>
      {brands.map((brand) => (
        <div className={styles.filterItem} key={brand.id}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleCheckboxChange(brand)}
          />
          <p>{brand.charAt(0).toUpperCase() + brand.slice(1)} </p>
        </div>
      ))}
    </div>
  );
};

export default BrendFilter;
