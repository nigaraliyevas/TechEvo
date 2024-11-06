import "./EnterPasswordPage.scss";
import "../../../assets/common/base.scss";
import Button from "../../../components/Button/Button";
import OtpInput from "../../../components/OTP/OtpInput";

const EnterPasswordPage = () => {
  return (
    <div className="password-reset-container">
      <div className="container">
        <div className="password-reset-box">
          <form method="post" onSubmit={ev => ev.preventDefault()}>
            <h2>Kodu daxil edin</h2>
            <p>Zəhmət olmasa kodu daxil edin.</p>
            <OtpInput />
            <Button buttonText={"Davam et"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnterPasswordPage;
