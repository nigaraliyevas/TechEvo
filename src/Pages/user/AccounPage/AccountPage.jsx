import style from "./account.module.scss";
import userprofile from "../../../assets/images/account/userprofile.svg";
import order from "../../../assets/images/account/accountIcon/orderIcon.svg";
import userIcon from "../../../assets/images/account/accountIcon/userIcon.svg";
import heart from "../../../assets/images/account/accountIcon/heartIcon.svg";
import out from "../../../assets/images/account/accountIcon/logout.svg";
import password from "../../../assets/images/account/accountIcon/password.svg";
import Favorites from "../../../components/Favorites/Favorites";
import camre from "../../../assets/images/account/accountIcon/camere.svg";

import AllOrders from "../../../components/Orders/AllOrders";
import { useState, useEffect } from "react";
import Logout from "../../../components/Account/Logout";
import AccountConfirme from "../../../components/Account/AccountConfirme";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../redux/sercives/userApi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AccountPage = ({ setExist, setConfirm, exist, confirm }) => {
  const [account, setAccount] = useState(true);
  const [orders, setOrders] = useState(false);
  const [like, setLike] = useState(false);
  const [user, setUser] = useState(null);
  const { accessToken } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });
  const [updateUser] = useUpdateUserMutation();

  // İstifadəçi məlumatlarının saxlanması
  useEffect(() => {
    if (data) {
      setUser({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        cityName: data.cityName || "",
        profileImg: data.profileImg || null,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setUser((prevState) => ({ ...prevState, profileImg: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("request", JSON.stringify(user));
    if (user.profileImg) formData.append("profileImg", user.profileImg);

    try {
      await updateUser(formData).unwrap();
      alert("Məlumat uğurla yeniləndi!");
    } catch (error) {
      console.error("Xəta:", error);
      alert("Məlumat yenilənmədi: " + (error?.data?.message || error.message));
    }
  };

  useEffect(() => {
    if (exist || confirm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [exist, confirm]);

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
      <div
        style={{
          marginTop: exist || confirm ? "0" : "",
        }}
        className={style.account}
      >
        <div className={style.account_container}>
          <div className={style.account_left}>
            <div className={style.user_image}>
              <img src={userprofile} alt="userprofile" />
              <div>
                <img src={camre} alt="camre" />
              </div>
            </div>
            <div className={style.user_info}>
              <div
                onClick={accountOpen}
                className={`${style.uer_info_item} ${
                  account ? style.active : ""
                }`}
              >
                <img src={userIcon} alt="" />
                <div>Hesab</div>
              </div>
              <div
                onClick={orderOpen}
                className={`${style.uer_info_item} ${
                  orders ? style.active : ""
                }`}
              >
                <img src={order} alt="" />
                <div>Sifarişlər</div>
              </div>
            
            </div>
            <div onClick={() => setExist(true)} className={style.user_out}>
              <img src={out} alt="" /> Çıxış
            </div>
          </div>
          {account && (
            <div className={style.account_right}>
              <div className={style.account_info}>Hesab məlumatları</div>
              <div>
                <form onSubmit={handleSubmit} className={style.user_inputs}>
                  <div className={style.user_input}>
                    <div className={style.user_name}>
                      <label htmlFor="">Ad</label>
                      <div className={style.user_input}>
                        <input
                          value={user ? user.firstName : ""}
                          type="text"
                          placeholder="Ad"
                          onChange={(e) =>
                            setUser({ ...user, firstName: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className={style.user_name}>
                      <label htmlFor="">Soyad</label>
                      <div className={style.user_input}>
                        <input
                          type="text"
                          placeholder="Soyad"
                          value={user ? user.lastName : ""}
                          onChange={(e) =>
                            setUser({ ...user, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={style.user_input}>
                    <div className={style.user_name}>
                      <label htmlFor="">E-mail</label>
                      <div className={style.user_input}>
                        <input
                          type="email"
                          placeholder="E-mail"
                          value={user ? user.email : ""}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className={style.user_name}>
                      <label htmlFor="">Ünvan</label>
                      <div className={style.user_input}>
                        <input
                          type="text"
                          placeholder="Ünvan"
                          value={user?.address || ""} // undefined olarsa boş dəyər ver
                          onChange={(e) =>
                            setUser({ ...user, address: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginTop: "32px" }}>
                      <div className={style.user_password}>
                        Şifrəni sıfırla <img src={password} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={style.user_btn}>
                    <button>Yadda Saxla</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {orders && <AllOrders />}
         
        </div>
      </div>

      {exist&&<Logout setConfirm={setConfirm} setExist={setExist} />}
      {confirm && <AccountConfirme setConfirm={setConfirm} />}
    </div>
  );
};

export default AccountPage;