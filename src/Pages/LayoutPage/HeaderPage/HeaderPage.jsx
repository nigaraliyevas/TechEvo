import styles from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const HeaderPage = () => {
 const navigate=useNavigate()
  return (

    <header>
    <div className={`${styles.container} ${styles.navbar_bg} `}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_title}>TechEvo</div>
        <div className={styles.navbar_right}>
          <ul className={styles.navbar_pages}>
            <li className={styles.navbar_links}>Pc</li>
            <li className={styles.navbar_links}>Laptop</li>
            <li className={styles.navbar_links}>Aksesuarlar</li>
            <li className={styles.navbar_ideal}>
              Ideal Pc <GoRocket size={24} />
            </li>
            <li className={styles.navbar_links}>Xidmetler</li>
            <li className={styles.navbar_links}>Blog</li>
            <li className={styles.navbar_links}>Dəstək</li>
          </ul>

          <div className={styles.navbar_icons}>
            <div>
              <CiSearch size={24} />
            </div>
            <div>
              <SlBasket size={24} />
            </div>
            <div>
              <BiUser onClick={()=>navigate("/login")} size={24} />
            </div>
          </div>
        </div>
      </nav>
    </div>
    </header>
  );
};

export default HeaderPage;
