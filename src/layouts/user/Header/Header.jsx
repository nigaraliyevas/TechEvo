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
import rightIcon from "../../../assets/images/HeaderPage/rigtIcon.svg";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../../App.css";
import { useSelector } from "react-redux";
const Header = ({ exist, confirm }) => {
  const { count } = useSelector((state) => state.basket);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenPc(false);
    setOpenLaptop(false);
    setOpenAccessory(false);
    setOpen(false);
  };
  const [openPc, setOpenPc] = useState(false);
  const [openLaptop, setOpenLaptop] = useState(false);
  const [openAccessory, setOpenAccessory] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: exist || confirm ? "static" : "",
      }}
    >
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
              <NavLink to={"idealpc"} className={styles.navbar_ideal}>
                <div>
                  Özün seç <GoRocket size={24} />
                </div>
                <span className={styles.border_line}></span>
              </NavLink>
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
                {count > 0 && <span>{count}</span>}
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
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "rgba(204, 204, 204, 1)",
                    }}
                    to={"/accountpage"}
                    className={styles.navbar_users_item}
                  >
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
                <span
                  className={isOpen ? styles.close_button : styles.open_button}
                >
                  <IoIosMenu size={24} />
                </span>
                <span
                  className={!isOpen ? styles.close_button : styles.open_button}
                >
                  <IoMdClose size={24} />
                </span>
              </div>
            </div>
          </div>
          <div
            className={isOpen ? styles.responsive_navbar : styles.menu__open}
          >
            <div className={styles.responsive_navbar_items}>
              <div className={styles.responsive_navbar_item}>
                <div className={styles.responsive_navbar_item_div}>
                  <Link className={styles.responsive_navbar_item_link}>
                    <div>PC</div>
                  </Link>
                  <div onClick={() => setOpenPc(true)}>
                    <IoIosArrowForward />
                  </div>

                  <div
                    style={{
                      transform: openPc ? "translateX(0px)" : "",
                      
                    }}
                    className={styles.responsive_navbar_item_link_catagories}
                  >
                    <img
                      onClick={() => setOpenPc(false)}
                      src={rightIcon}
                      style={
                        {
                          display:openPc?"block":"none"
                        }
                      }
                      alt=""
                    />
                    <div className={styles.responsive_navbar_catagories_items}>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Oyun üçün
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Dizayn üçün
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p>Ofis üçün</p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Ev üçün
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          PC hissələri
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Hamısı birində
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Laptop
                  </Link>
                  <div onClick={() => setOpenLaptop(true)}>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div
                    style={{
                      transform: openLaptop ? "translateX(0px)" : "",
                    }}
                    className={styles.responsive_navbar_item_link_catagories}
                  >
                    <img
                      onClick={() => setOpenLaptop(false)}
                      src={rightIcon}
                      alt=""
                      style={
                        {
                          display:openLaptop?"block":"none"
                        }
                      }
                    />
                    <div className={styles.responsive_navbar_catagories_items}>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Oyun üçün
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Dizayn üçün
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p>Ofis üçün</p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Ev üçün
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          İkisi birində
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.responsive_navbar_item}>
                <div>
                  <Link className={styles.responsive_navbar_item_link}>
                    Aksesuar
                  </Link>
                  <div onClick={() => setOpenAccessory(true)}>
                    <IoIosArrowForward size={20} />
                  </div>
                  <div
                    style={{
                      transform: openAccessory ? "translateX(0px)" : "",
                    }}
                    className={styles.responsive_navbar_item_link_catagories}
                  >
                    <div onClick={() => setOpenAccessory(false)}>
                      <img   style={
                        {
                          display:openAccessory?"block":"none"
                        }
                      } src={rightIcon} alt="" />
                    </div>
                    <div className={styles.responsive_navbar_catagories_items}>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Aksesuarlar
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p className={styles.responsive_navbar_catagories_text}>
                          Avadanlıqlar
                        </p>
                      </div>
                      <div className={styles.responsive_navbar_catagories_item}>
                        <span
                          className={
                            styles.responsive_navbar_catagories_item_dot
                          }
                        ></span>
                        <p>Mebel</p>
                      </div>
                    </div>
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
              <Link
                to={"/basket"}
                className={styles.responsive_navbar_item_link}
              >
                <div className={styles.responsive_navbar_icon}>
                  <SlBasket size={28} />
                </div>
                Səbət
              </Link>
              <div className={styles.responsive_navbar_item_link}>
                <div
                  onClick={() => setOpen(true)}
                  className={styles.responsive_navbar_icon}
                >
                  <BiUser size={28} />
                </div>
                Hesab
                <div
                  style={{
                    transform: open ? "translateX(0px)" : "",
                  }}
                  className={styles.navbar_users_items}
                >
                  <div onClick={() => setOpen(false)}>
                    <img  style={
                        {
                          display:open?"block":"none"
                        }
                      } src={rightIcon} alt="" />
                  </div>
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
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "rgba(204, 204, 204, 1)",
                    }}
                    to={"/accountpage"}
                    className={styles.navbar_users_item}
                  >
                    <span>
                      <BiUser size={24} />
                    </span>
                    Hesabım
                  </Link>
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
          {/* MOBILE NAVBAR END*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;
