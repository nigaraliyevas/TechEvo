import { Link } from "react-router-dom";
import styles from "../Sidebar/Sidebar.module.scss";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className={`col-12 col-md-3 text-white p-3 d-flex flex-column ${styles["col-lg-2"]}`}>
      {/* Logo */}
      <img src="/src/assets/images/HeaderPage/tech-evo-logo 1.png" alt="Logo" style={{ width: "48px", height: "41px" }} className="mb-4" />

      {/* Navigation links */}
      <ul className="nav flex-column">
        <li className={`${styles.nav_item} mb-2`}>
          <Link to="" className="nav-link text-white">
            <img src="/src/assets/images/admin/Dashboard/esasLovhe.svg" className={styles.nav_icon} alt="" />
            Əsas lövhə
          </Link>
        </li>
        <li className={`${styles.nav_item} mb-2`}>
          <Link to="" className="nav-link text-white">
            <img src="/src/assets/images/admin/Dashboard/magaza.svg" className={styles.nav_icon} alt="" />
            Mağaza
          </Link>
        </li>
        <li className={`${styles.nav_item} mb-2`}>
          <Link to="" className="nav-link text-white">
            <img src="/src/assets/images/admin/Dashboard/baskket.svg" className={styles.nav_icon} alt="" />
            Sifarişlər
          </Link>
        </li>
        <li className={`mb-2`} onClick={toggleDropdown}>
          <div className="nav-link d-flex align-items-center">
            <img src="/src/assets/images/admin/Dashboard/sehifeler.svg" className={styles.nav_icon} alt="" />
            <span className={styles.nav_item__link}>Səhifələr</span>
            <img src="/src/assets/images/admin/Dashboard/arrow-down.svg" className={`${styles.nav_icon__chevron} ${open ? styles.rotate : ""}`} alt="" />
          </div>
          {open && (
            <div className={styles.dropdown_menu}>
              <ul className={styles.dropdown_menu__list}>
                <li className={styles.dropdown_menu__item}>
                  <Link>İkinci əl satış</Link>
                </li>
                <li className={styles.dropdown_menu__item}>
                  <Link to="/admin/adminRepair">Təmir</Link>
                </li>
                <li className={styles.dropdown_menu__item}>
                  <Link to="/admin/adminDelivery">Çatdırılma</Link>
                </li>
                <li className={styles.dropdown_menu__item}>
                  <Link to="/admin/adminCredit">Daxili kredit</Link>
                </li>
                <li className={styles.dropdown_menu__item}>
                  <Link to="/">Ana səhifə</Link>
                </li>
                <li className={styles.dropdown_menu__item}>
                  <Link to="/">Özün seç</Link>
                </li>
                <li className={styles.dropdown_menu__item}>
                  <Link to="/">Pc page</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      {/* Bottom links */}
      <ul className="nav flex-column mt-auto">
        <li className={styles.nav_item}>
          <Link to="" className="nav-link text-white">
            <img src="/src/assets/images/admin/Dashboard/user.svg" className={styles.nav_icon} alt="" />
            User
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="" className="nav-link text-white">
            <img src="/src/assets/images/admin/Dashboard/setting-2.svg" className={styles.nav_icon} alt="" />
            Parametrlər
          </Link>
        </li>
        <li className={styles.nav_item} style={{ marginBottom: "41px" }}>
          <Link to="" className="nav-link text-white">
            <img src="/src/assets/images/admin/Dashboard/chixish.svg" className={styles.nav_icon} alt="" />
            Çıxış
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
