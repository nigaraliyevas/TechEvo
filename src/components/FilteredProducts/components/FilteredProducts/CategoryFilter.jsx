import { useDispatch, useSelector } from "react-redux";
import styles from "./FilteredProducts.module.scss";
import { toggleCategory } from "../../../../redux/slices/FilterSlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { selectedCategories } = useSelector((state) => state.filter);

  const categories = ["game", "design", "office", "home"];

  const handleCheckboxChange = (category) => {
    dispatch(toggleCategory(category));
    additionalFunction(category);
  };

  const additionalFunction = (category) => {
    console.log(
      `${category.charAt(0).toUpperCase() + category.slice(1)} seçildi.`
    );
  };

  return (
    <div id={styles.FilteredProductsSide}>
      {categories.map((category) => (
        <div className={styles.filterItem} key={category}>
          <div>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
          </div>
          <div>
            <p>{category.charAt(0).toUpperCase() + category.slice(1)} üçün</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
