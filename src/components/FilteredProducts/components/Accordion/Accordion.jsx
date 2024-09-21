import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Accordion.module.css";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={onToggle}>
        {title}
        {isOpen ? (
          <FaChevronUp className={styles.icon} />
        ) : (
          <FaChevronDown className={styles.icon} />
        )}
      </div>
      {isOpen && <div className={styles.accordion_content}>{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState(Array.from(Array(items.length).keys()));

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
