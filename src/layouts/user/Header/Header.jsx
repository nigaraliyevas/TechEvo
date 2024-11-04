import styles from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { LiaUserPlusSolid } from "react-icons/lia";
import { PiSignInFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/HeaderPage/tech-evo-logo 1.png";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../../App.css";
const Header = () => {
  const [sliderState2, setSliderState2] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const setSliderOnclick2 = (sliderIndex2) => {
    const newSliderState2 = sliderState2.map((_, idx) => idx === sliderIndex2);
    setSliderState2(newSliderState2);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className={`${styles.container} ${styles.navbar_bg} `}>
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <NavLink to="/">
              <img src={logo} alt="navBarLogo" />
            </NavLink>
          </div>
          <div className={styles.navbar_right}>
            <ul className={styles.navbar_pages}>
              <li className={styles.navbar_links}>
                <NavLink
                  to={"/pc"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  PC
                </NavLink>
                <div className={styles.link_catagiries}>
                  <div>
                    <ul>
                      <li className={styles.link_relative}>
                        PC hissələri
                        <div className={styles.link_catagirie_dropdown}>
                          <ul>
                            <li>Monitorlar</li>
                            <li>Prosessorlar</li>
                            <li>Qida bloku</li>
                            <li>Ana plata</li>
                            <li>Video kart</li>
                            <li>Operativ yaddaş</li>
                            <li>HDD / SSD</li>
                            <li>Soyutma sistemləri</li>
                            <li>Şəbəkə kartları</li>
                            <li>Səs kartları</li>
                            <li>Keyslər</li>
                          </ul>
                        </div>
                      </li>
                      <li>Oyun üçün</li>
                      <li>Dizayn üçün</li>
                      <li>Ofis üçün</li>
                      <li>Ev üçün</li>
                      <li>Hamısı birində</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className={styles.navbar_links}>
                Laptop
                <div className={styles.link_catagiries}>
                  <div>
                    <ul>
                      <li>Oyun üçün</li>
                      <li>Dizayn üçün</li>
                      <li>Ofis üçün</li>
                      <li>Ev üçün</li>

                      <li>İkisi birində</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.navbar_links}>
                <Link style={{ color: "white", textDecoration: "none" }}>
                  Aksesuarlar
                </Link>
                <div className={styles.link_catagiries}>
                  <div>
                    <ul>
                      <li className={styles.link_relative}>
                        Aksesuarlar
                        <div className={styles.link_catagirie_dropdown}>
                          <ul>
                            <li>Klaviatura</li>
                            <li>Siçan</li>
                            <li>Qulaqlıq</li>
                            <li>Kontrollerlər</li>
                            <li>Veb-kamera</li>
                            <li>Mikrofonlar</li>
                            <li>Digər</li>
                          </ul>
                        </div>
                      </li>
                      <li className={styles.link_relative}>
                        Avadanlıqlar
                        <div className={styles.link_catagirie_dropdown}>
                          <ul>
                            <li>Printerlər</li>
                            <li>Skannerlər</li>
                            <li>Proyektorlar</li>
                            <li>Kabel və Adaptorlar</li>
                            <li>Digər</li>
                          </ul>
                        </div>
                      </li>
                      <li className={styles.link_relative}>
                        Mebel
                        <div className={styles.link_catagirie_dropdown}>
                          <ul>
                            <li>Kreslo</li>
                            <li>Masa</li>
                            <li>Digər</li>
                          </ul>
                        </div>
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
                <NavLink to={"/basket"} className={styles.navbar_icon}>
                  <SlBasket size={24} />
                </NavLink>
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
                    <NavLink
                      style={{ color: "rgb(204, 204, 204)" }}
                      className="text-decoration-none "
                      to="/register"
                    >
                      Qeydiyyat
                    </NavLink>
                  </div>
                  <div className={styles.navbar_users_item}>
                    <span>
                      <PiSignInFill size={24} />
                    </span>
                    <NavLink
                      style={{ color: "rgb(204, 204, 204)" }}
                      className="text-decoration-none"
                      to="/login"
                    >
                      Daxil ol
                    </NavLink>
                  </div>
                  <NavLink style={{textDecoration:"none",color:"rgba(204, 204, 204, 1)"}} to={"/accountpage"} className={styles.navbar_users_item}>
                    <span>
                      <BiUser size={24} />
                    </span>
                    Hesabım
                  </NavLink>
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

          {/* MOBILE NAVBAR start*/}

          <div className={styles.display_none}>
            <li className={styles.navbar_ideal}>
              <div>
                Özün seç <GoRocket size={24} />
              </div>
              <span className={styles.border_line}></span>
            </li>
          </div>

          <div className={styles.display_none}>
            <div className={styles.navbar_icon}>
              <FiSearch size={24} />
            </div>
            <div className={styles.navbar_icon}>
              <div onClick={toggleMenu} className={styles.navbar_icon}>
                {isOpen ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
              </div>
            </div>
          </div>
          <div
            className={isOpen ? styles.responsive_navbar : styles.menu__open}
          >
            <div className={styles.responsive_navbar_items}>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>PC</Link>
                  <div>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>PC</Link>
                  <div>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Laptop
                  </Link>
                  <div>
                    <IoIosArrowForward size={20} />
                  </div>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Aksesuar
                  </Link>
                  <div>
                    <IoIosArrowForward size={20} />
                  </div>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Xidmətlər
                  </Link>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Blog
                  </Link>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Dəstək
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.responsive_navbar_icons}>
              <Link className={styles.responsive_navbar_item_link}>
                Səbət
                <div className={styles.responsive_navbar_icon}>
                  <SlBasket size={28} />
                </div>
              </Link>
              <Link className={styles.responsive_navbar_item_link}>
                Hesab
                <div className={styles.responsive_navbar_icon}>
                  <BiUser size={28} />
                </div>
              </Link>
            </div>
          </div>
          {/* MOBILE NAVBAR END*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;
