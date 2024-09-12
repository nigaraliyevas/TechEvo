import  { useState } from "react";
import styles from "./RegisterPage2.module.scss";
import passwordIcon from "/public/assets/images/Register/PasswordIcon.svg";
import passwordIcon2 from "/public/assets/images/Register/PasswordIcon2.svg";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../components/css/Button.scss";
export default function RegisterPage2() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    password: "",
    repeatPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const handleChangeChecked = event => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    navigate("/welcome");
    // try {
    // //   const response = await axios.post("url", formData);
    // } catch (error) {
    //   setError("Registration error");
    // }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleRepeatedPassword = () => {
    setShowRepeatedPassword(!showRepeatedPassword);
  };

  return (
    <div className={styles.innerCont}>
      <div className={styles.topText}>Qeydiyyat</div>
      <div className={styles.infoText}>Daxil olmaq üçün aşağıdakı xanaları doldurun.</div>
      <form onSubmit={handleSubmit} className={styles.register2Container}>
        <div>
          <div className={styles.subHeader}>Ad</div>
          <div className={styles.inputContainer}>
            <input name="name" value={formData.name} onChange={handleChange} required className={styles.innerInput} type="text" placeholder="Ad" />
          </div>
        </div>

        <div>
          <div className={styles.subHeader}>Soyad</div>
          <div className={styles.inputContainer}>
            <input name="surname" value={formData.surname} onChange={handleChange} required className={styles.innerInput} type="text" placeholder="Soyad" />
          </div>
        </div>

        <div>
          <div className={styles.subHeader}>Şifrə</div>
          <div className={styles.inputContainer}>
            <input name="password" value={formData.password} onChange={handleChange} required className={styles.innerInput} type={showPassword ? `text` : `password`} placeholder="Şifrənizi daxil edin" />
            <div className={styles.icon}>
              <img onClick={handlePassword} className={styles.iconImage} src={showPassword ? passwordIcon2 : passwordIcon} alt="ClosedEyeIcon" />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.subHeader}>Şifrəni təkrarla</div>
          <div className={styles.inputContainer}>
            <input name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required className={styles.innerInput} type={showRepeatedPassword ? `text` : `password`} placeholder="Şifrənizi daxil edin" />
            <div className={styles.icon}>
              <img onClick={handleRepeatedPassword} className={styles.iconImage} src={showRepeatedPassword ? passwordIcon2 : passwordIcon} alt="ClosedEyeIcon" />
            </div>
          </div>
        </div>

        <div className={styles.agreementBox}>
          <div className={styles.checkBoxContainer}>
            <input onChange={handleChangeChecked} className={styles.checkBoxInput} type="checkbox" checked={isChecked} />
            <span className={styles.customCheckmark}></span>
          </div>
          <div>İstifadəçi şərtləri ilə razıyam</div>
        </div>
        <button type="submit" className="Btn">
          Qeydiyyatdan keç
        </button>
      </form>
    </div>
  );
}