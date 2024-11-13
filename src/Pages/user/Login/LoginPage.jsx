import { useState } from "react";
import styles from "./LoginPage.module.scss";
import "../../../components/css/Button.scss";
import eyeIcon from "../../../assets/images/Welcome/Faeye.png";
import openEye from "../../../assets/images/Welcome/OpenEye.png";
import "../../../assets/common/base.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/AuthSlice";
import Button from "../../../components/Button/Button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { error, isLoading, accessToken } = useSelector(state => state.auth);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  if (accessToken) {
    navigate("/");
  }

  return (
    <div className="container" id={styles.container_bg}>
      <div className={styles.welcomeBox}>
        <div className={styles.welcomeBox_container}>
          <div className={styles.welcomeBox_container_head}>
            <h1>Xoş Gəldiniz!</h1>
            <p>Daxil olmaq üçün aşağıdakı xanaları doldurun.</p>
          </div>
          <div className={styles.welcomeBox_container_foot}>
            <form className={styles.form_group} onSubmit={handleSubmit}>
              <label htmlFor="email" className={styles.labelContent}>
                E-poçt
              </label>
              <input type="text" placeholder="E-poçt" id="email" value={email} className={styles.inp} onChange={e => setEmail(e.target.value)} required />

              <label htmlFor="password" className={styles.labelContent}>
                Şifrə
              </label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <input className={styles.inp} type={showPassword ? "text" : "password"} value={password} id="password" placeholder="Şifrəni daxil edin" onChange={e => setPassword(e.target.value)} required style={{ paddingRight: "2.5rem" }} />
                <img
                  src={showPassword ? eyeIcon : openEye}
                  alt="Toggle visibility"
                  onClick={handleTogglePassword}
                  style={{
                    position: "absolute",
                    right: "0.8rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <div className={styles.forgetPassword}>
                <Link to="/forget">şifrəni unutmusan?</Link>
              </div>
              <Button buttonText={isLoading ? "Gözləyin..." : "Daxil ol"} type="submit" disabled={isLoading} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
