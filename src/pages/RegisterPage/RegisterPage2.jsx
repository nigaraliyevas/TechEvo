import  { useState } from "react";
import styles from "./RegisterPage2.module.scss";
import passwordIcon from "/public/assets/images/Register/PasswordIcon.svg";
import passwordIcon2 from "/public/assets/images/Register/PasswordIcon2.svg";
import { useNavigate } from "react-router-dom";
import "../../components/css/Button.scss";
export default function RegisterPage2() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    password: "",
    repeatPassword: "",
  });
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

    setErrors({
      name: "",
      surname: "",
      password: "",
      repeatPassword: "",
    });
    
    if (formData.password !== formData.repeatPassword) {
      setErrors(prevErrors => ({
        ...prevErrors,
        repeatPassword: "Passwords do not match",
      }));
      return; 
    }

    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    

    try {
      const response = await fetch("https://ff82f4df-f72b-4dec-84ca-487132aff620.mock.pstmn.io/api/v1/auth/register", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });
  
      if (response.ok) {
          navigate("/login");
      } else {
          const errorData = await response.json();
          const { name, surname, password, repeatPassword } = errorData.errors || {};
          setErrors({
              name: name || "",
              surname: surname || "",
              password: password || "",
              repeatPassword: repeatPassword || "",
          });
      }
  } catch (error) {
      console.error("An error occurred:", error);
  }
  
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors(prevErrors => ({...prevErrors, [e.target.name]: ""}));
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
      <div className={styles.infoText}>
        Daxil olmaq üçün aşağıdakı xanaları doldurun.
      </div>
      <form onSubmit={handleSubmit} className={styles.register2Container}>
        <div>
          <div className={styles.subHeader}>Ad</div>
          <div className={styles.inputContainer}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.innerInput}
              type="text"
              placeholder="Ad"
            />
          </div>
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <div className={styles.subHeader}>Soyad</div>
          <div className={styles.inputContainer}>
            <input
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className={styles.innerInput}
              type="text"
              placeholder="Soyad"
            />
          </div>
          {errors.surname && <p>{errors.surname}</p>}
        </div>

        <div>
          <div className={styles.subHeader}>Şifrə</div>
          <div className={styles.inputContainer}>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.innerInput}
              type={showPassword ? `text` : `password`}
              placeholder="Şifrənizi daxil edin"
            />
            <div className={styles.icon}>
              <img
                onClick={handlePassword}
                className={styles.iconImage}
                src={showPassword ? passwordIcon2 : passwordIcon}
                alt="ClosedEyeIcon"
              />
            </div>
          </div>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <div className={styles.subHeader}>Şifrəni təkrarla</div>
          <div className={styles.inputContainer}>
            <input
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              required
              className={styles.innerInput}
              type={showRepeatedPassword ? `text` : `password`}
              placeholder="Şifrənizi daxil edin"
            />
            <div className={styles.icon}>
              <img
                onClick={handleRepeatedPassword}
                className={styles.iconImage}
                src={showRepeatedPassword ? passwordIcon2 : passwordIcon}
                alt="ClosedEyeIcon"
              />
            </div>
          </div>
          {errors.repeatPassword && <p>{errors.repeatPassword}</p>}
        </div>

        <div className={styles.agreementBox}>
          <div className={styles.checkBoxContainer}>
            <input
              onChange={handleChangeChecked}
              className={styles.checkBoxInput}
              type="checkbox"
              checked={isChecked}
            />
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
