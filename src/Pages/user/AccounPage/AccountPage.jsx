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
import { useGetUserQuery, useUpdateUserMutation } from "../../../redux/sercives/userApi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AccountPage = ({ setQuite, setConfirm, qiute, confirm }) => {
  const [account, setAccount] = useState(true);
  const [orders, setOrders] = useState(false);
  const [like, setLike] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
 
  const queryParams = new URLSearchParams(location.search);
  const userData = queryParams.get("userData");

  const { accessToken } = useSelector(state => state.auth); // Access tokens from Redux
 
  const { data, isError, isLoading } = useGetUserQuery(undefined, {
    skip: !localStorage.getItem("accessToken"),
  });


  const updateUserProfile = async (updatedUser) => {
    try {
      const response = await axios.put(
        "/api/v1/user/profile/update",
        updatedUser,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Cavab:", response.data);
      alert("Məlumat uğurla yeniləndi!");
      return response.data;
    } catch (error) {
      console.error("Xəta:", error.response?.data || error.message);
      alert("Məlumat yenilənmədi: " + error.message);
    }
  };

  // const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  useEffect(() => {
    if (data) {
      setUser({
        id: data.id || 0,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        profileImg: data.profileImg || "",
        cityName: data.cityName || "",
        favoriteProductIds: data.favoriteProductIds || [],
        createdAt: data.createdAt || "",
        updatedAt: data.updatedAt || ""
      });
    }  
  }, [data]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImg: user.profileImg,
      cityName: user.cityName,
    };
  
    await updateUserProfile(updatedUser);
  };
  console.log(user,"user");
  
  useEffect(() => {
    if (qiute || confirm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [qiute, confirm]);

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
          marginTop: qiute || confirm ? "0" : "",
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
              <div onClick={accountOpen} className={`${style.uer_info_item} ${account ? style.active : ""}`}>
                <img src={userIcon} alt="" />
                <div>Hesab</div>
              </div>
              <div onClick={orderOpen} className={`${style.uer_info_item} ${orders ? style.active : ""}`}>
                <img src={order} alt="" />
                <div>Sifarişlər</div>
              </div>
              <div onClick={likeOpen} className={`${style.uer_info_item} ${like ? style.active : ""}`}>
                <img src={heart} alt="" />
                <div>Sevimlilər</div>
              </div>
            </div>
            <div onClick={() => setQuite(true)} className={style.user_out}>
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
                        <input value={user ? user.firstName : ""}  type="text" placeholder="Ad" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        
                      </div>
                    </div>
                    <div className={style.user_name}>
                      <label htmlFor="">Soyad</label>
                      <div className={style.user_input}>
                        <input type="text" placeholder="Soyad" 
                         value={user ? user.lastName : ""}
                         onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={style.user_input}>
                    <div className={style.user_name}>
                      <label htmlFor="">E-mail</label>
                      <div className={style.user_input}>
                        <input type="email" placeholder="E-mail"  value={user ? user.email : ""} 
                         onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                      </div>
                    </div>
                    <div className={style.user_name}>
                      <label htmlFor="">Ünvan</label>
                      <div className={style.user_input}>
                        <input type="text" placeholder="Ünvan"
                           value={user ? user.address : ""}
                           onChange={(e) => setUser({ ...user, address: e.target.value })} />
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
                </ form>
              </div>
            </div>
          )}
          {orders && <AllOrders />}
          {like && <Favorites />}
        </div>
      </div>

       {/* <Logout setConfirm={setConfirm} setQuite={setQuite} /> */}
      {confirm && <AccountConfirme setConfirm={setConfirm} />}  
    </div>
  );
};

export default AccountPage;
