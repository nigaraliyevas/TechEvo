import styles from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { LiaUserPlusSolid } from "react-icons/lia";
import { PiSignInFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../public/assets/images/HeaderPage/tech-evo-logo 1.png";

const HeaderPage = () => {
  const navigate = useNavigate();

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
              <Link to={"/pc"} style={{ padding: "0px 20px" }} className={`${styles.navbar_links}  text-decoration-none text-white`}>
                PC
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
              </Link>
              <li className={styles.navbar_links}>Laptop
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
                Aksesuarlar
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
                Ideal Pc <GoRocket size={24} />
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
                <SlBasket size={24} />
              </div>
              <div className={styles.navbar_users} style={{ padding: "32px 0px" }}>
                <BiUser size={24} />
                <div className={styles.navbar_users_items}>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <LiaUserPlusSolid size={24} />
                    </span>
                    <Link style={{ color: "rgb(204, 204, 204)" }} className="text-decoration-none " to="/register">
                      Qeydiyyat
                    </Link>
                  </div>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <PiSignInFill size={24} />
                    </span>
                    <Link style={{ color: "rgb(204, 204, 204)" }} className="text-decoration-none" to="/login">
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

export default HeaderPage;
