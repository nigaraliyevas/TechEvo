import styles from "./Header.module.scss";
const Header = () => {
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();

    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

    const month = months[date.getMonth()];

    return `${day} ${month}, ${year}`;
  };
  return (
    <div>
      <div className="col-12 d-flex justify-content-between align-items-center mb-4">
        <h2 className={styles.header_date}>{getDate()}</h2>
        <div className="d-flex align-items-center" style={{ gap: "15px" }}>
          <form action="" className="form">
            <div className={styles.search_container}>
              <img className={styles.search_img} src="/src/assets/images/HeaderPage/Component10.png" alt="" />
              <input className={`${styles.search_input} form-control`} type="text" placeholder="Axtarış" />
            </div>
          </form>
          <div className={styles.bell_container}>
            <img src="/src/assets/images/admin/Dashboard/notification.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
