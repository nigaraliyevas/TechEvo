import Card from "../../HomePageSections/Card/Card";
import { cards } from "../../../../src/DataHome";
import styles from "../../../Pages/HomePage/HomePage.module.scss";

const PcSection = ({ count = null }) => {
  const sliceData = (count) => {
    // Return JSX based on the `count` prop
    return (count === null ? cards : cards.slice(0, count))
      .map(card => <Card key={card.id} card={card} />);
  };

  return (
    <div>
      <div className={styles.cardMain}>
        {sliceData(count)}
      </div>
    </div>
  );
};

export default PcSection;