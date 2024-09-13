import { useState } from "react";
import styles from "./WelcomeRegisterPage.module.scss";
import "../../components/css/Button.scss";
import eyeIcon from "../../../public/assets/images/Welcome/Faeye.png";
import openEye from "../../../public/assets/images/Welcome/OpenEye.png";
import axios from "axios";

const WelcomeRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    const isValid = validateForm();
    if (!isValid) return;

    axios
      .post("https://your-api-url.com/login", { email, password })
      .then((res) => {
        console.log(res);
        setEmailError("");
        setPasswordError("");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          const errors = err.response.data.errors;

          if (errors.email) {
            setEmailError(errors.email.message || "Girişdə səhv baş verdi.");
          }
          if (errors.password) {
            setPasswordError(
              errors.password.message || "Girişdə səhv baş verdi."
            );
          }
        } else {
          setEmailError("Şəbəkə səhvi.");
          setPasswordError("Şəbəkə səhvi.");
        }
      });
  };

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email sahəsi boş olmamalıdır.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Düzgün bir e-poçt ünvanı daxil edin.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Şifrə sahəsi boş olmamalıdır.");
      isValid = false;
    }

    return isValid;
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container">
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
                value={email}
                className={styles.inp}
                onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Şifrəni daxil edin"
                  onChange={(e) => setPassword(e.target.value)}
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
                <a href="#">şifrəni unutmusan?</a>
              </div>
              <button className="Btn" type="submit">
                Daxil ol
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeRegisterPage;
