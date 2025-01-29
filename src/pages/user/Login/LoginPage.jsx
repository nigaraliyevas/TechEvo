import { useState } from "react";
import styles from "./LoginPage.module.scss";
import "../../../components/css/Button.scss";
import eyeIcon from "../../../assets/images/Welcome/Faeye.png";
import openEye from "../../../assets/images/Welcome/OpenEye.png";
import "../../../assets/common/base.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import useLogin from "../../../hooks/useLogin";
import toast from "react-hot-toast";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(""); // State for the error message

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  const login = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError(""); // Clear error if login succeeds
    } catch (error) {
      setError(error.message); // Display backend error message
      toast.error(error.message);
    }
  };


  return (
    <div className="container" id={styles.container_bg}>
      <div className={styles.welcomeBox}>
        <div className={styles.welcomeBox_container}>
          <div className={styles.welcomeBox_container_head}>
            <h1>Xoş Gəldiniz!</h1>
            <p>Daxil olmaq üçün aşağıdakı xanaları doldurun.</p>
          </div>
          <div className={styles.welcomeBox_container_foot}>
            <form className={styles.form_group} onSubmit={handleLogin}>
              <label htmlFor="email" className={styles.labelContent}>
                E-poçt
              </label>
              <input type="email" required placeholder="E-poçt" id="email" value={email} className={styles.inp} onChange={e => setEmail(e.target.value)}  />

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
              {/* <Button buttonText={isLoading ? "Gözləyin..." : "Daxil ol"} type="submit" disabled={isLoading} /> */}
              <Button buttonText="Daxil ol" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
