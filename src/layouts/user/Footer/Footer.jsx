import style from "./Footer.module.scss";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/HeaderPage/tech-evo-logo 1.png";
const Footer = () => {


  return (
    <footer className={style.footer}> 
      <div className={style.container}>
      <div className={style.footer_top}>
        <div className={style.footer_title}>
          <Link className="text-white text-decoration-none" to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={style.footer_icons}>
          <span className={style.footer_icon}>
            <FaInstagram size={24} />
          </span>
          <span className={style.footer_icon}>
            <FaTwitter size={24} />
          </span>
          <span className={style.footer_icon}>
            <FaFacebook size={24} />
          </span>
        </div>
      </div>
      <p className={style.footer_text}>Design amazing digital experiences that create more happy in the world.</p>
      <ul className={style.footer_links}>

        <div className={style.footer_link_left}>
        <li>Haqqımızda</li>
        <li>Şərtlər və Qaydalar</li>
        <li>Ödəniş</li>
        <li>Əlaqə</li>

        </div>
        <div className={style.footer_link_right}>
        <li>Yeniliklər</li>
        <li>Blog</li>
        <li>Karyera</li>

        </div>
      </ul>
      <div className={style.footer_bottom}>
        <p>© 2077 Untitled UI. All rights reserved.</p>
        <p>
          <span>
            <FiPhone size={22} />
          </span>
          +994(70) 911 36 35
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
