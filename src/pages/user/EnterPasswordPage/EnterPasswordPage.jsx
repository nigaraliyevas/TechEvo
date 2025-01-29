// import "./EnterPasswordPage.scss";
// import "../../../assets/common/base.scss";
// import Button from "../../../components/Button/Button";
// import OtpInput from "../../../components/OTP/OtpInput";
// import { useVerifyCodeMutation, useSendVerificationCodeMutation } from "../../../redux/sercives/forgetPassApi";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EnterPasswordPage = () => {
//   const [verificationCode, setVerificationCode] = useState("");
//   const [email, setEmail] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [messageColor, setMessageColor] = useState(""); // State for message color
//   const [timer, setTimer] = useState(90); // Timer state (1 minute 30 seconds in seconds)
//   const [verifyOtp, { data, isLoading, isSuccess, isError }] = useVerifyCodeMutation();
//   const [sendVerificationCode, { isLoading: isResending }] = useSendVerificationCodeMutation();
//   const nav = useNavigate();

//   useEffect(() => {
//     setEmail(localStorage.getItem("changePasswordEmail") || null);
//   }, []);

//   useEffect(() => {
//     if (isSuccess) {
//       if (data === false) {
//         setResponseMessage("OTP təsdiqlənmədi, yenidən cəhd edin.");
//         setMessageColor("red");
//       } else {
//         setResponseMessage("OTP uğurla təsdiqləndi, zəhmət olmasa gözləyin...");
//         setMessageColor("green");
//         if (data === true) {
//           setTimeout(() => {
//             localStorage.setItem("otp", verificationCode);
//             nav("/newpassword");
//           }, 2000);
//         }
//       }
//     }
//   }, [isSuccess, data, nav, verificationCode]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await verifyOtp({ email, verificationCode }).unwrap();
//     } catch (error) {
//       setResponseMessage("OTP uğursuz nəticələndi.");
//       setMessageColor("red");
//     }
//   };

//   const handleOtpChange = code => {
//     setVerificationCode(code);
//   };

//   const handleResendCode = async () => {
//     try {
//       await sendVerificationCode({ email }).unwrap();
//       setResponseMessage("Kod yenidən göndərildi.");
//       setMessageColor("green");
//       setTimer(90); // Reset timer to 1 minute 30 seconds
//     } catch (error) {
//       setResponseMessage("Kod göndərmə uğursuz oldu. Yenidən cəhd edin.");
//       setMessageColor("red");
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   const formatTime = () => {
//     const minutes = Math.floor(timer / 60);
//     const seconds = timer % 60;
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div className="password-reset-container">
//       <div className="container" id="reset-box__bg">
//         <div className="password-reset-box">
//           <form method="post" onSubmit={handleSubmit}>
//             <h2>Kodu daxil edin</h2>
//             <p>Zəhmət olmasa kodu daxil edin.</p>
//             <OtpInput onOtpChange={handleOtpChange} isResending={isResending} />

//             {responseMessage && (
//               <p
//                 style={{
//                   color: messageColor,
//                   textAlign: "start",
//                   marginLeft: "13px",
//                   marginTop: "10px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 {responseMessage}
//               </p>
//             )}

//             <p
//               style={{
//                 color: "white",
//                 textAlign: "start",
//                 marginLeft: "13px",
//                 marginTop: "10px",
//                 marginBottom: "10px",
//               }}
//             >
//               {timer > 0 ? `Yenidən göndərmək üçün vaxt: ${formatTime()}` : "Yenidən göndər düyməsini istifadə edə bilərsiniz."}
//             </p>

//             {timer === 0 && (
//               <button type="button" className="password-reset-box_resend" onClick={handleResendCode} disabled={isResending}>
//                 {isResending ? "Yenidən göndərilir..." : "Yenidən göndər"}
//               </button>
//             )}
//             <Button buttonText={isLoading ? "Gözləyin..." : "Davam et"} />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnterPasswordPage;

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
  const [messageColor, setMessageColor] = useState(""); // State for message color
  const [timer, setTimer] = useState(0); // Timer state
  const [verifyOtp, { data, isLoading, isSuccess, isError }] = useVerifyCodeMutation();
  const [sendVerificationCode, { isLoading: isResending }] = useSendVerificationCodeMutation();
  const nav = useNavigate();

  useEffect(() => {
    setEmail(localStorage.getItem("changePasswordEmail") || null);

    // Check if a timer end time is already stored
    const storedEndTime = localStorage.getItem("otpTimerEndTime");
    if (storedEndTime) {
      const remainingTime = Math.floor((new Date(storedEndTime) - new Date()) / 1000);
      if (remainingTime > 0) {
        setTimer(remainingTime); // Resume timer
      } else {
        setTimer(0); // Reset timer if expired
      }
    } else {
      setTimer(90); // Default to 90 seconds if no stored timer exists
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    if (isSuccess) {
      if (data === false) {
        setResponseMessage("OTP təsdiqlənmədi, yenidən cəhd edin.");
        setMessageColor("red");
      } else {
        setResponseMessage("OTP uğurla təsdiqləndi, zəhmət olmasa gözləyin...");
        setMessageColor("green");
        if (data === true) {
          setTimeout(() => {
            localStorage.setItem("otp", verificationCode);
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
      setMessageColor("red");
    }
  };

  const handleOtpChange = code => {
    setVerificationCode(code);
  };

  const handleResendCode = async () => {
    try {
      await sendVerificationCode({ email }).unwrap();
      setResponseMessage("Kod yenidən göndərildi.");
      setMessageColor("green");

      // Reset the timer and store the new end time
      const newEndTime = new Date(new Date().getTime() + 90 * 1000);
      localStorage.setItem("otpTimerEndTime", newEndTime.toISOString());
      setTimer(90); // Reset timer to 90 seconds
    } catch (error) {
      setResponseMessage("Kod göndərmə uğursuz oldu. Yenidən cəhd edin.");
      setMessageColor("red");
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="password-reset-container">
      <div className="container" id="reset-box__bg">
        <div className="password-reset-box">
          <form method="post" onSubmit={handleSubmit}>
            <h2>Kodu daxil edin</h2>
            <p>Zəhmət olmasa kodu daxil edin.</p>
            <OtpInput onOtpChange={handleOtpChange} isResending={isResending} />

            {responseMessage && (
              <p
                style={{
                  color: messageColor,
                  textAlign: "start",
                  marginLeft: "13px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                {responseMessage}
              </p>
            )}

            <p
              style={{
                color: "white",
                textAlign: "start",
                marginLeft: "13px",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              {timer > 0 && `Yenidən göndərmək üçün vaxt: ${formatTime()}`}
            </p>

            {timer === 0 && (
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
