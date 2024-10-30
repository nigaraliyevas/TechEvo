import style from "./account.module.scss";
import userprofile from "../../../assets/images/account/userprofile.svg"
import order from "../../../assets/images/account/accountIcon/orderIcon.svg"
import userIcon from "../../../assets/images/account/accountIcon/userIcon.svg"
import heart from "../../../assets/images/account/accountIcon/heartIcon.svg"
import out from "../../../assets/images/account/accountIcon/logout.svg"
import password from '../../../assets/images/account/accountIcon/password.svg'
import Favorites from "../../../components/Favorites/Favorites";
const AccountPage = () => {

  return (

    <div className={style.container}>
      <div className={style.account}>
        <div className={style.account_container}>
          <div className={style.account_left}>
            <div className={style.user_image}>
              <img src={userprofile} alt="" />
            </div>
            <div className={style.user_info}>
              <div className={style.uer_info_item}>
                <img src={userIcon} alt="" />
                <div>Hesab</div>
              </div>
              <div className={style.uer_info_item}>
                <img src={order} alt="" />
                <div>Sifarişlər</div>
              </div>
              <div className={style.uer_info_item}>
                <img src={heart} alt="" />
                <div>Sevimlilər</div>

              </div>
            </div>
            <div className={style.user_out}>
              <img src={out} alt="" />  Çıxış
            </div>
          </div>
          {/* <div className={style.account_right}>

            <div className={style.account_info}>
            Hesab məlumatları
            </div>
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
                    <div className={style.user_name}>
                      <label htmlFor="">Şifrə</label>
                      <div className={style.user_input}>
                        <input type="password" placeholder="Şifrə" />
                      </div>
                      <div className={style.user_password}>
                      Şifrəni sıfırla <img src={password} alt="" />
                      </div>
                    </div>
                </div>

              </div>
              <div className={style.user_btn}>
              <button  type="submit">Yadda saxla</button>

              </div>
            </form>

        </div> */}
          <Favorites />
        </div>

      </div>
    </div>
  );
};

export default AccountPage;
