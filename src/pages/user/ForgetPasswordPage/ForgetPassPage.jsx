import { useState } from "react";
import { useSendVerificationCodeMutation } from "../../../redux/sercives/forgetPassApi"; // adjust the path if necessary
import Button from "../../../components/Button/Button";
import styles from "./ForgetPassPage.module.scss";
import { useNavigate } from "react-router-dom";

function ForgetPassPage() {
  const [email, setEmail] = useState("");
  const [sendVerificationCode, { isLoading, isError, isSuccess, error }] = useSendVerificationCodeMutation();
  const [responseMessage, setResponseMessage] = useState("");
  const nav = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    if (email) {
      try {
        const response = await sendVerificationCode({ email }).unwrap();
        setResponseMessage("Təsdiqləmək üçün kod uğurla göndərildi.Zəhmət olmasa gözləyin...");
        setTimeout(() => {
          localStorage.setItem("changePasswordEmail", email);
          nav("/otp");
        }, 2000);
      } catch (err) {
        if (err.status === 404) {
          setResponseMessage("E-poçt adresi tapılmadı.");
        } else {
          setResponseMessage("Təsdiqləmək üçün kod göndərilən zaman xəta baş verdi.");
        }
      }
    } else {
      alert("Email daxil edin");
    }
  };

  return (
    <section className={styles.forget_password}>
      <div className="container" id={styles.forget_container}>
        <div className={styles.forget_password_content}>
          <div className={styles.forget_password_box}>
            <div>
              <div className={styles.forget_password_top}>
                <h1 className={styles.forget_password_header}>Şifrəni unutmusan?</h1>
                <span className={styles.forget_password_subtitle}>Zəhmət olmasa e-poçt adresinizi daxil edin.</span>
              </div>
              <div className={styles.forget_password_bottom}>
                <form className={styles.forget_password_form} onSubmit={handleSubmit}>
                  <label className={styles.forget_password_label}>E-poçt</label>
                  <input className={styles.forget_password_input} name="email" id="mail" type="email" placeholder="E-poçt" value={email} onChange={e => setEmail(e.target.value)} />
                  {responseMessage && <p className={isError ? styles.error_message : styles.success_message}>{responseMessage}</p>}
                  <div className={styles.forget__password_btn_area}>
                    <Button buttonText={isLoading ? "Göndərilir..." : "Göndər"} type="submit" disabled={isLoading} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassPage;
