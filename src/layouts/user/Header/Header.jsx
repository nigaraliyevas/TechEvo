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
  };
  const [openPc, setOpenPc] = useState(false);
  const [openLaptop, setOpenLaptop] = useState(false);
  const [openAccessory, setOpenAccessory] = useState(false);
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

              <NavLink to={"/Laptop"} className={styles.navbar_links}>
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
              </NavLink>
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
                  Özün seç
                  <svg     className={styles.navbar_rocet_icon} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8219 0.75H21.9979C22.4618 0.75 22.9068 0.934237 23.2349 1.26221C23.5631 1.59018 23.7476 2.03504 23.7479 2.499V3.676C23.7486 6.41702 22.7023 9.0548 20.8229 11.05L19.5949 12.354C19.0869 12.8923 18.5544 13.4069 17.9989 13.896V18.934C17.9989 19.549 17.6759 20.118 17.1489 20.434L12.6349 23.143C12.5324 23.2046 12.4167 23.2407 12.2974 23.2485C12.1781 23.2562 12.0587 23.2354 11.9491 23.1876C11.8395 23.1399 11.7429 23.0666 11.6674 22.974C11.5919 22.8813 11.5396 22.772 11.5149 22.655L10.5519 18.083C10.5021 18.0435 10.4553 18.0004 10.4119 17.954L8.53986 15.96L6.54586 14.087C6.4995 14.0435 6.45638 13.9968 6.41686 13.947L1.84586 12.984C1.72873 12.9596 1.61914 12.9075 1.52625 12.832C1.43336 12.7566 1.35987 12.66 1.31191 12.5504C1.26394 12.4408 1.24291 12.3213 1.25056 12.2019C1.2582 12.0825 1.29431 11.9666 1.35586 11.864L4.06586 7.35C4.38186 6.823 4.95086 6.5 5.56586 6.5H10.6029C11.092 5.94519 11.6066 5.41329 12.1449 4.906L13.4489 3.676C15.4434 1.79666 18.0804 0.75002 20.8209 0.75H20.8219ZM14.4779 4.768L13.1739 5.997C11.9468 7.15348 10.8548 8.4454 9.91886 9.848L7.72586 13.138L9.58486 14.882L9.61886 14.916L11.3619 16.774L14.6499 14.582C16.0536 13.6456 17.3466 12.553 18.5039 11.325L19.7319 10.022C21.3493 8.30498 22.2497 6.03489 22.2489 3.676V2.5C22.2489 2.4337 22.2225 2.37011 22.1756 2.32322C22.1288 2.27634 22.0652 2.25 21.9989 2.25H20.8219C18.4635 2.24993 16.1942 3.15064 14.4779 4.768ZM6.99986 21C5.79086 22.209 3.09886 22.445 2.25686 22.49C2.22386 22.4918 2.19084 22.4868 2.15987 22.4753C2.1289 22.4638 2.10064 22.446 2.07686 22.423C2.0539 22.3992 2.0361 22.371 2.02457 22.34C2.01304 22.309 2.00804 22.276 2.00986 22.243C2.05486 21.401 2.29086 18.709 3.49986 17.5C4.39986 16.6 6.09986 16.6 6.99986 17.5C7.89986 18.4 7.89986 20.1 6.99986 21ZM6.40786 12.412L8.66986 9.017C8.90053 8.671 9.13953 8.332 9.38686 8H5.56586C5.52279 8.00003 5.48046 8.01118 5.44296 8.03238C5.40547 8.05358 5.37409 8.08411 5.35186 8.121L3.18486 11.733L6.40786 12.412ZM16.4999 15.112C16.1665 15.36 15.8272 15.5993 15.4819 15.83L12.0889 18.092L12.7669 21.315L16.3789 19.148C16.4158 19.1258 16.4463 19.0944 16.4675 19.0569C16.4887 19.0194 16.4998 18.9771 16.4999 18.934V15.112ZM17.9999 8C17.9998 8.19705 17.9609 8.39215 17.8855 8.57418C17.81 8.7562 17.6994 8.92158 17.56 9.06087C17.4206 9.20016 17.2552 9.31063 17.0731 9.38597C16.891 9.46132 16.6959 9.50007 16.4989 9.5C16.3018 9.49993 16.1067 9.46106 15.9247 9.38559C15.7427 9.31012 15.5773 9.19954 15.438 9.06016C15.2987 8.92078 15.1882 8.75533 15.1129 8.57325C15.0375 8.39118 14.9988 8.19605 14.9989 7.999C14.999 7.60104 15.1572 7.21944 15.4387 6.93813C15.7202 6.65683 16.1019 6.49887 16.4999 6.499C16.8978 6.49913 17.2794 6.65735 17.5607 6.93884C17.842 7.22033 18 7.60204 17.9999 8Z" fill="white"/>
</svg>

                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.navbar_rocet_icon2}
                  >
                    <path
                      d="M20.8221 0.75H21.9981C22.4621 0.75 22.907 0.934237 23.2352 1.26221C23.5634 1.59018 23.7478 2.03504 23.7481 2.499V3.676C23.7489 6.41702 22.7026 9.0548 20.8231 11.05L19.5951 12.354C19.0872 12.8923 18.5546 13.4069 17.9991 13.896V18.934C17.9991 19.549 17.6761 20.118 17.1491 20.434L12.6351 23.143C12.5326 23.2046 12.4169 23.2407 12.2976 23.2485C12.1784 23.2562 12.0589 23.2354 11.9493 23.1876C11.8398 23.1399 11.7432 23.0666 11.6676 22.974C11.5921 22.8813 11.5398 22.772 11.5151 22.655L10.5521 18.083C10.5024 18.0435 10.4556 18.0004 10.4121 17.954L8.54011 15.96L6.54611 14.087C6.49974 14.0435 6.45663 13.9968 6.41711 13.947L1.84611 12.984C1.72897 12.9596 1.61938 12.9075 1.52649 12.832C1.4336 12.7566 1.36011 12.66 1.31215 12.5504C1.26419 12.4408 1.24315 12.3213 1.2508 12.2019C1.25845 12.0825 1.29456 11.9666 1.35611 11.864L4.06611 7.35C4.38211 6.823 4.95111 6.5 5.56611 6.5H10.6031C11.0923 5.94519 11.6068 5.41329 12.1451 4.906L13.4491 3.676C15.4437 1.79666 18.0806 0.75002 20.8211 0.75H20.8221ZM14.4781 4.768L13.1741 5.997C11.947 7.15348 10.855 8.4454 9.91911 9.848L7.72611 13.138L9.58511 14.882L9.61911 14.916L11.3621 16.774L14.6501 14.582C16.0539 13.6456 17.3468 12.553 18.5041 11.325L19.7321 10.022C21.3496 8.30498 22.25 6.03489 22.2491 3.676V2.5C22.2491 2.4337 22.2228 2.37011 22.1759 2.32322C22.129 2.27634 22.0654 2.25 21.9991 2.25H20.8221C18.4638 2.24993 16.1945 3.15064 14.4781 4.768ZM7.00011 21C5.79111 22.209 3.09911 22.445 2.25711 22.49C2.22411 22.4918 2.19109 22.4868 2.16011 22.4753C2.12914 22.4638 2.10088 22.446 2.07711 22.423C2.05415 22.3992 2.03635 22.371 2.02482 22.34C2.01329 22.309 2.00828 22.276 2.01011 22.243C2.05511 21.401 2.29111 18.709 3.50011 17.5C4.40011 16.6 6.10011 16.6 7.00011 17.5C7.90011 18.4 7.90011 20.1 7.00011 21ZM6.40811 12.412L8.67011 9.017C8.90077 8.671 9.13977 8.332 9.38711 8H5.56611C5.52304 8.00003 5.4807 8.01118 5.44321 8.03238C5.40571 8.05358 5.37433 8.08411 5.35211 8.121L3.18511 11.733L6.40811 12.412ZM16.5001 15.112C16.1668 15.36 15.8274 15.5993 15.4821 15.83L12.0891 18.092L12.7671 21.315L16.3791 19.148C16.416 19.1258 16.4465 19.0944 16.4677 19.0569C16.4889 19.0194 16.5001 18.9771 16.5001 18.934V15.112ZM18.0001 8C18 8.19705 17.9612 8.39215 17.8857 8.57418C17.8102 8.7562 17.6996 8.92158 17.5603 9.06087C17.4209 9.20016 17.2554 9.31063 17.0734 9.38597C16.8913 9.46132 16.6962 9.50007 16.4991 9.5C16.3021 9.49993 16.107 9.46106 15.9249 9.38559C15.7429 9.31012 15.5775 9.19954 15.4382 9.06016C15.299 8.92078 15.1885 8.75533 15.1131 8.57325C15.0378 8.39118 14.999 8.19605 14.9991 7.999C14.9992 7.60104 15.1575 7.21944 15.4389 6.93813C15.7204 6.65683 16.1021 6.49887 16.5001 6.499C16.8981 6.49913 17.2797 6.65735 17.561 6.93884C17.8423 7.22033 18.0002 7.60204 18.0001 8Z"
                      fill="url(#paint0_linear_4402_8805)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4402_8805"
                        x1="1.24927"
                        y1="5.97323"
                        x2="24.9829"
                        y2="11.0587"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F43F45" stop-opacity="0.8" />
                        <stop
                          offset="0.565"
                          stop-color="#D036D6"
                          stop-opacity="0.8"
                        />
                        <stop
                          offset="1"
                          stop-color="#5A4AF5"
                          stop-opacity="0.8"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
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
                    <img
                      onClick={() => setOpenAccessory(false)}
                      src={rightIcon}
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
              <Link className={styles.responsive_navbar_item_link}>
                <div className={styles.responsive_navbar_icon}>
                  <BiUser size={28} />
                </div>
                Hesab
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
