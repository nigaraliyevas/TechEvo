//styles
import styles from "./NoOrder.module.scss";
// images
import emptyImg from "../../assets/images/Orders/emptyOrderPage.svg";

const NoOrder = () => {
  return (
    <div className={styles.noOrderCont}>
      <div className={styles.emptyImgCont}>
        <img className={styles.emptyImg} src={emptyImg} alt="the list is empty" />
      </div>
      <div className={styles.title}>Sifariş yoxdur</div>
    </div>
  );
};

export default NoOrder;
