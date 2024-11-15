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
import { useNavigate } from "react-router-dom";

const AccountPage = ({ setExist, setConfirm, exist, confirm }) => {
  const [account, setAccount] = useState(true);
  const [orders, setOrders] = useState(false);
  const [like, setLike] = useState(false);
  // const [userData, setUserData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   address: "",
  // });
  const navigate = useNavigate();
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

  /// ISTIFADECI MELUMATLARIN CEKMEK

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem("TechEvoToken");
//         const response = await fetch("/api/v1/user/allUsers", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData({
//             firstName: data.firstName,
//             lastName: data.lastName,
//             email: data.email,
//             address: data.address,
//           });
//         } else {
//           console.error("Məlumatları çəkmək alınmadı");
//         }
//       } catch (err) {
//         console.error("Xəta:", err);
//       }
//     };

//     fetchUserData();
//   }, []);
//  ///MELUMATLARI YENILEMEK
//  const saveChanges = async () => {
//     try {
//       const token = localStorage.getItem("TechEvoToken");
//       const response = await fetch("API_URL_HERE", {
//         method: "PUT", // Yaxud `PATCH`
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(userData),
//       });
  
//       if (response.ok) {
//         alert("Məlumatlar uğurla yeniləndi!");
//         setConfirm(true)
//       } else {
//         alert("Məlumatlar yenilənmədi. Xəta baş verdi.");
//       }
//     } catch (err) {
//       console.error("Xəta:", err);
//       alert("Məlumatları göndərərkən xəta baş verdi.");
//     }
//   };
  
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
              <div
                onClick={likeOpen}
                className={`${style.uer_info_item} ${like ? style.active : ""}`}
              >
                <img src={heart} alt="" />
                <div>Sevimlilər</div>
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
                <div className={style.user_inputs}>
                  <div className={style.user_input}>
                    <div className={style.user_name}>
                      <label htmlFor="firstName">Ad</label>
                      <div className={style.user_input}>
                        <input
                          type="text"
                          placeholder="Ad"
                        />
                      </div>
                    </div>
                    <div className={style.user_name}>
                      <label htmlFor="">Soyad</label>
                      <div className={style.user_input}>
                        <input
                          type="text"
                          placeholder="Soyad"
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
                        />
                      </div>
                    </div>
                    <div className={style.user_name}>
                      <label htmlFor="">Ünvan</label>
                      <div className={style.user_input}>
                        <input
                          type="text"
                          placeholder="Ünvan"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ marginTop: "32px" }}>
                      <div
                        onClick={() => navigate("/newpassword")}
                        className={style.user_password}
                      >
                        Şifrəni sıfırla <img src={password} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={style.user_btn}>
                    <button >
                      Yadda saxla
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {orders && <AllOrders />}
          {like && <Favorites />}
        </div>
      </div>
      {exist && <Logout setConfirm={setConfirm} setExist={setExist} />}
      {confirm && <AccountConfirme setConfirm={setConfirm} />}
    </div>
  );
};

export default AccountPage;
