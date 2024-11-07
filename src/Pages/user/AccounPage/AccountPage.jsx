import style from "./account.module.scss";
import userprofile from "../../../assets/images/account/userprofile.svg";
import order from "../../../assets/images/account/accountIcon/orderIcon.svg";
import userIcon from "../../../assets/images/account/accountIcon/userIcon.svg";
import heart from "../../../assets/images/account/accountIcon/heartIcon.svg";
import out from "../../../assets/images/account/accountIcon/logout.svg";
import password from "../../../assets/images/account/accountIcon/password.svg";
import Favorites from "../../../components/Favorites/Favorites";
import camre from "../../../assets/images/account/accountIcon/camere.svg";
// import password from "../../../assets/images/account/accountIcon/password.svg";
import AllOrders from "../../../components/Orders/AllOrders";
import { useState } from "react";

const AccountPage = () => {
  const [account, setAccount] = useState(true);
  const [orders, setOrders] = useState(false);
  const [like, setLike] = useState(false);

  const accountOpen = () => {
    setAccount(true);
    setOrders(false);
    setLike(false);
  };

  const orderOpen = () => {
    setOrders(true);
    setAccount(false);
    setLike(false);
  };

  const likeOpen = () => {
    setLike(true);
    setOrders(false);
    setAccount(false);
  };

  return (
    <div className={style.container}>
      <div className={style.account}>
        <div className={style.account_container}>
          <div className={style.account_left}>
            <div className={style.user_image}>
              <img src={userprofile} alt="userprofile" />
              <div>
                <img src={camre} alt="camre" />
              </div>
            </div>
            <div className={style.user_info}>
              <div onClick={accountOpen} className={`${style.uer_info_item} ${account ? style.active : ""}`}>
                <img src={userIcon} alt="" />
                <div>Hesab</div>
              </div>
              <div onClick={orderOpen} className={`${style.uer_info_item} ${ orders? style.active : ""}`}>
                <img src={order} alt="" />
                <div>Sifarişlər</div>
              </div>
              <div onClick={likeOpen} className={`${style.uer_info_item} ${like ? style.active : ""}`}>
                <img src={heart} alt="" />
                <div>Sevimlilər</div>
              </div>
            </div>
            <div className={style.user_out}>
              <img src={out} alt="" /> Çıxış
            </div>
          </div>
          {
            account&&
          <div className={style.account_right}>
            <div className={style.account_info}>Hesab məlumatları</div>
            <form action="">
              <div className={style.user_inputs}>
                <div className={style.user_input}>
                  <div className={style.user_name}>
                    <label htmlFor="">Ad</label>
                    <div className={style.user_input}>
                      <input type="text" placeholder="Ad" />
                    </div>
                  </div>
                  <div className={style.user_name}>
                    <label htmlFor="">Soyad</label>
                    <div className={style.user_input}>
                      <input type="text" placeholder="Soyad" />
                    </div>
                  </div>
                </div>
                <div className={style.user_input}>
                  <div className={style.user_name}>
                    <label htmlFor="">E-mail</label>
                    <div className={style.user_input}>
                      <input type="email" placeholder="E-mail" />
                    </div>
                  </div>
                  <div className={style.user_name}>
                    <label htmlFor="">Ünvan</label>
                    <div className={style.user_input}>
                      <input type="text" placeholder="Ünvan" />
                    </div>
                  </div>
                </div>

                <div className={style.user_input}>
                  <div style={{ marginTop: "8px" }} className={style.user_name}>
                    <label htmlFor="">Şifrə</label>
                    <div className={style.user_input}>
                      <input type="password" placeholder="Şifrə" />
                    </div>
                        <div className={style.user_password}>
                          Şifrəni sıfırla <img src={password} alt="" />
                        </div>
                  </div>
                </div>
                  <div className={style.user_btn}>
                    <button type="submit">Yadda saxla</button>
                  </div>
              </div>
            </form>
          </div>
          }
          {
            orders&&
          <AllOrders />
          }
          {
            like&&
          <Favorites />
          }
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
