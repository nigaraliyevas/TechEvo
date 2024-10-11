import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Accordion.module.css";


const AccordionItem = ({ data , handleFilter }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={() => setShowContent(!showContent)}>
        {data.title}
        {showContent ? (
          <FaChevronUp className={styles.icon} />
        ) : (
          <FaChevronDown className={styles.icon} />
        )}
      </div>
      {showContent && <div className={styles.accordion_content}>
        <div id={styles.FilteredProductsSide}>
          {data.options.map((item, index) => (
            <div className={styles.filterItem} key={index}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={() => handleFilter(item, data.key)}
              // checked={selectedBrands.includes(brand)}
              // onChange={() => handleCheckboxChange(brand)}
              />
              <p>{item.title} </p>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
};


const Accordion = ({ data, handleFilter }) => {

  return (
    <div className={styles.accordion}>
      {data.map((item) => (
        <AccordionItem
          handleFilter={handleFilter}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default Accordion;
