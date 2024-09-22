import style from "./Footer.module.scss";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const FooterPage = () => {
  return (
    <footer className={`${style.container} ${style.footer}`}>
      <div className={style.footer_top}>
        <div className={style.footer_title}>TechEvo</div>
        <div className={style.footer_icons}>
          <span className={style.footer_icon}>
            <FaInstagram size={24}/>
          </span>
          <span className={style.footer_icon}>
            <FaTwitter size={24}/>
          </span>
          <span className={style.footer_icon}>
            <FaFacebook size={24}/>
          </span>
        </div>
      </div>
      <p className={style.footer_text}>
        Design amazing digital experiences that create more happy in the world.
      </p>
      <ul className={style.footer_links}>
        <li>Haqqımızda</li>
        <li>Şərtlər və Qaydalar</li>
        <li>Ödəniş</li>
        <li>Əlaqə</li>
        <li>Yeniliklər</li>
        <li>Blog</li>
        <li>Karyera</li>
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
    </footer>
  );
};

export default FooterPage;
