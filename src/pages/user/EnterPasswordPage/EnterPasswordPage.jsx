import "./EnterPasswordPage.scss";
import "../../../assets/common/base.scss";
import Button from "../../../components/Button/Button";
import OtpInput from "../../../components/OTP/OtpInput";
import { useVerifyCodeMutation, useSendVerificationCodeMutation } from "../../../redux/sercives/forgetPassApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterPasswordPage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [verifyOtp, { data, isLoading, isSuccess, isError }] = useVerifyCodeMutation();
  const [sendVerificationCode, { isLoading: isResending }] = useSendVerificationCodeMutation();
  const nav = useNavigate();

  useEffect(() => {
    setEmail(localStorage.getItem("changePasswordEmail") || null);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      if (data === false) {
        setResponseMessage("OTP təsdiqlənmədi, yenidən cəhd edin.");
      } else {
        setResponseMessage("OTP uğurla təsdiqləndi, zəhmət olmasa gözləyin...");
        if (data == true) {
          setTimeout(() => {
            localStorage.setItem("otp", verificationCode);
            // localStorage.removeItem("changePasswordEmail");
            nav("/newpassword");
          }, 2000);
        }
      }
    }
  }, [isSuccess, data, nav, verificationCode]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await verifyOtp({ email, verificationCode }).unwrap();
    } catch (error) {
      setResponseMessage("OTP uğursuz nəticələndi.");
    }
  };

  const handleOtpChange = code => {
    setVerificationCode(code);
  };

  const handleResendCode = async () => {
    try {
      await sendVerificationCode({ email }).unwrap();
      setResponseMessage("Kod yenidən göndərildi.");
    } catch (error) {
      setResponseMessage("Kod göndərmə uğursuz oldu. Yenidən cəhd edin.");
    }
  };
  return (
    <div className="password-reset-container">
      <div className="container" id="reset-box__bg">
        <div className="password-reset-box">
          <form method="post" onSubmit={handleSubmit}>
            <h2>Kodu daxil edin</h2>
            <p>Zəhmət olmasa kodu daxil edin.</p>
            <OtpInput onOtpChange={handleOtpChange} />
            {data == false && <p style={{ color: "red", textAlign: "start", marginLeft: "13px", marginTop: "10px", marginBottom: "10px" }}>{responseMessage}</p>}
            {isSuccess && data && <p style={{ color: "green", textAlign: "start", marginLeft: "13px", marginTop: "10px", marginBottom: "10px" }}>{responseMessage}</p>}
            {data === false && (
              <button type="button" className="password-reset-box_resend" onClick={handleResendCode} disabled={isResending}>
                {isResending ? "Yenidən göndərilir..." : "Yenidən göndər"}
              </button>
            )}
            <Button buttonText={isLoading ? "Gözləyin..." : "Davam et"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnterPasswordPage;
