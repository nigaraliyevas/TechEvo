import { useState } from "react";
import styles from "./WelcomeRegisterPage.module.scss";
import "../../components/css/Button.scss";
import eyeIcon from "../../../public/assets/images/Welcome/Faeye.png";
import openEye from "../../../public/assets/images/Welcome/OpenEye.png";
import Button from "../../components/Button/Button";
import "/public/assets//common/base.scss";
import { Link, useNavigate } from "react-router-dom";

const WelcomeRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setMessage("");

    try {
      const response = await fetch(
        "https://c82b-5-133-233-247.ngrok-free.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        console.log(data.accessToken);
        console.log(data.refreshToken);

        setMessage(data.message);
        navigate("/");
      } else {
        const errorData = await response.json();
        if (errorData.email) {
          setEmailError(errorData.email);
        }
        if (errorData.password) {
          setPasswordError(errorData.password);
        }
      }
    } catch (err) {
      console.error(err);
      setPasswordError("İstifadəçi adı və ya şifrə yanlışdır");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
            <form className={styles.form_group} onSubmit={handleSubmit}>
              <label htmlFor="email" className={styles.labelContent}>
                E-poçt
              </label>
              <input
                type="text"
                placeholder="E-poçt"
                id="email"
                value={email}
                className={styles.inp}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p className={styles.error}>{emailError}</p>}

              <label htmlFor="password" className={styles.labelContent}>
                Şifrə
              </label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <input
                  className={styles.inp}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  id="password"
                  placeholder="Şifrəni daxil edin"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
              {passwordError && <p className={styles.error}>{passwordError}</p>}

              <div className={styles.forgetPassword}>
                <Link to="/forget">şifrəni unutmusan?</Link>
              </div>
              <Button buttonText={"Daxil ol"} type="submit" />
              {message && <p className="success">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeRegisterPage;
