import { useDispatch, useSelector } from "react-redux";
import styles from "./FilteredProducts.module.scss";
import { toggleVideoCard } from "../../../../redux/slices/FilterSlice";

const VideoCardFilter = () => {
  const dispatch = useDispatch();
  const { selectedVideoCards } = useSelector((state) => state.filter);

  const videoCards = ["Nvidia", "AMD", "Intel Graphics"];

  const handleCheckboxChange = (videoCard) => {
    dispatch(toggleVideoCard(videoCard));
  };

  return (
    <div id={styles.FilteredProductsSide}>
      {videoCards.map((videoCard) => (
        <div className={styles.filterItem} key={videoCard}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={selectedVideoCards.includes(videoCard)}
            onChange={() => handleCheckboxChange(videoCard)}
          />
          <p>{videoCard}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoCardFilter;
