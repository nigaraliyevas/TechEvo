import React, { useState } from "react";
import styles from "./WelcomeRegisterPage.module.scss";
import "../../components/css/Button.scss";
import eyeIcon from "../../../public/assets/images/Welcome/Faeye.png";
import openEye from "../../../public/assets/images/Welcome/OpenEye.png";
import axios from "axios";
import Button from "../../components/Button/Button";

const WelcomeRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("url/", { email, password })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <>
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

                <input type="text" placeholder="E-poçt" value={email} className={styles.inp} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password" className={styles.labelContent}>
                  Şifrə
                </label>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <input className={styles.inp} type={showPassword ? "text" : "password"} value={password} placeholder="Şifrəni daxil edin" onChange={e => setPassword(e.target.value)} />
                  <img
                    src={showPassword ? openEye : eyeIcon}
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

                <div className={styles.forgetPassword}>
                  <a href="#">şifrəni unutmusan?</a>
                </div>
                {<Button buttonText={"Daxil ol"} />}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeRegisterPage;
