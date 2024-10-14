import styles from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { LiaUserPlusSolid } from "react-icons/lia";
import { PiSignInFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/HeaderPage/tech-evo-logo 1.png";

const Header = () => {
  return (
    <header>
      <div className={`${styles.container} ${styles.navbar_bg} `}>
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <Link to="/">
              <img src={logo} alt="navBarLogo" />
            </Link>
          </div>
          <div className={styles.navbar_right}>
            <ul className={styles.navbar_pages}>
            <li className={styles.navbar_links}>
                <Link
                  to={"/pc"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                 PC
                </Link>
                <div className={styles.link_catagiries}>
                <div>
                  <ul>
                    <li>
                      <span>•</span> Oyun üçün
                    </li>
                    <li>
                      <span>•</span> Dizayn üçün
                    </li>
                    <li>
                      <span>•</span> Ofis üçün
                    </li>
                    <li>
                      <span>•</span> Ev üçün
                    </li>
                    <li>
                      <span>•</span> Hamısı birində
                    </li>
                  </ul>
                </div>
              </div>
              </li>


              <li className={styles.navbar_links}>
                Laptop
                <div className={styles.link_catagiries}>
                  <div>
                    <ul>
                      <li>
                        <span>•</span> Oyun üçün
                      </li>
                      <li>
                        <span>•</span> Dizayn üçün
                      </li>
                      <li>
                        <span>•</span> Ofis üçün
                      </li>
                      <li>
                        <span>•</span> Ev üçün
                      </li>
                      <li>
                        <span>•</span> İkisi birində
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.navbar_links}>
                <Link
                  to={"/product"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Aksesuarlar
                </Link>
                <div className={styles.link_catagiries}>
                  <div>
                    <ul>
                      <li>
                        <span>•</span> Aksesuarlar
                      </li>
                      <li>
                        <span>•</span> PC hissələri
                      </li>
                      <li>
                        <span>•</span> Avadanlıqlar
                      </li>
                      <li>
                        <span>•</span> Mebel
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.navbar_ideal}>
                <div>
                  Özün seç <GoRocket size={24} />
                </div>
                <span className={styles.border_line}></span>
              </li>
              <li className={styles.navbar_links}>Xidmətlər</li>
              <li className={styles.navbar_links}>Blog</li>
              <li className={styles.navbar_links}>Dəstək</li>
            </ul>

            <div className={styles.navbar_icons}>
              <div className={styles.navbar_icon}>
                <FiSearch size={24} />
              </div>
              <div className={styles.navbar_icon}>
                <Link to={"/basket"} className={styles.navbar_icon}>
                  <SlBasket size={24} />
                </Link>
              </div>
              <div
                className={styles.navbar_users}
                style={{ padding: "32px 0px" }}
              >
                <BiUser size={24} />
                <div className={styles.navbar_users_items}>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <LiaUserPlusSolid size={24} />
                    </span>
                    <Link
                      style={{ color: "rgb(204, 204, 204)" }}
                      className="text-decoration-none "
                      to="/register"
                    >
                      Qeydiyyat
                    </Link>
                  </div>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <PiSignInFill size={24} />
                    </span>
                    <Link
                      style={{ color: "rgb(204, 204, 204)" }}
                      className="text-decoration-none"
                      to="/login"
                    >
                      Daxil ol
                    </Link>
                  </div>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <BiUser size={24} />
                    </span>
                    Hesabım
                  </div>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <IoSettingsOutline size={24} />
                    </span>
                    Parametrlər
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
