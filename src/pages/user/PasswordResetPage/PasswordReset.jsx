// import { useState } from "react";
// import "./PasswordReset.scss";
// import Button from "../../../components/Button/Button";
// import Input from "../../../components/Input/Input";
// import { useChangePasswordMutation } from "../../../redux/sercives/forgetPassApi";
// import { useNavigate } from "react-router-dom";

// const PasswordReset = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [passwordErrors, setPasswordErrors] = useState([]);
//   const [changePassword, { data, isLoading, isSuccess, isError }] = useChangePasswordMutation();
//   const nav = useNavigate();

//   const validatePassword = (password, confirmPassword) => {
//     const errors = [];

//     if (password !== confirmPassword) {
//       errors.push("Şifrələr uyğun gəlmir.");
//     }
//     if (password.length < 8) {
//       errors.push("Şifrə ən azı 8 simvoldan ibarət olmalıdır.");
//     }
//     if (!/[A-Za-z]/.test(password)) {
//       errors.push("Şifrə ən azı bir hərfdən ibarət olmalıdır.");
//     }
//     if (!/\d/.test(password)) {
//       errors.push("Şifrə ən azı bir rəqəmdən ibarət olmalıdır.");
//     }
//     return errors;
//   };

//   const handleSubmit = async ev => {
//     ev.preventDefault();

//     const errors = validatePassword(password, confirmPassword);
//     if (errors.length > 0) {
//       setPasswordErrors(errors);
//       return;
//     }
//     const email = localStorage.getItem("changePasswordEmail");
//     const verificationCode = localStorage.getItem("otp");
//     try {
//       await changePassword({ newPassword: password, confirmPassword, email, verificationCode }).unwrap();
//       if (data.message == "Password changed successfully") {
//         localStorage.removeItem("changePasswordEmail");
//         localStorage.removeItem("otp");

//         nav("/login");
//         setError("");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Şifrə dəyişdirilərkən xəta baş verdi.");
//     }
//   };

//   return (
//     <div className="password-reset-container">
//       <div className="container">
//         <div className="password-reset-box">
//           <form method="post" onSubmit={handleSubmit}>
//             <h2>Yeni şifrə</h2>
//             <p className="password-reset-box__subtitle">Şifrəniz minimum 8 simvoldan ibarət olmalıdır.</p>
//             <Input labelText="Şifrə" type="password" placeholder="Şifrənizi daxil edin" value={password} onChange={e => setPassword(e.target.value)} />
//             <Input labelText="Şifrəni təkrarla" type="password" placeholder="Şifrənizi daxil edin" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
//             {passwordErrors.length > 0 &&
//               passwordErrors.map((error, index) => (
//                 <span key={index} className="error-message text-danger text-start d-block">
//                   {error}
//                 </span>
//               ))}
//             {isSuccess && <p className="success-message text-success text-start">Şifrə uğurla dəyişdirildi!</p>}
//             <Button buttonText={isLoading ? "Yüklənir..." : "Yadda saxla"} disabled={isLoading} />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PasswordReset;
import { useState } from "react";
import "./PasswordReset.scss";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { useChangePasswordMutation } from "../../../redux/sercives/forgetPassApi";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [changePassword, { data, isLoading, isSuccess, isError }] = useChangePasswordMutation();
  const nav = useNavigate();

  const validatePassword = (password, confirmPassword) => {
    const errors = [];

    if (password !== confirmPassword) {
      errors.push("Şifrələr uyğun gəlmir.");
    }
    if (password.length < 8) {
      errors.push("Şifrə ən azı 8 simvoldan ibarət olmalıdır.");
    }
    if (!/[A-Za-z]/.test(password)) {
      errors.push("Şifrə ən azı bir hərfdən ibarət olmalıdır.");
    }
    if (!/\d/.test(password)) {
      errors.push("Şifrə ən azı bir rəqəmdən ibarət olmalıdır.");
    }
    return errors;
  };

  const handleSubmit = async ev => {
    ev.preventDefault();

    const errors = validatePassword(password, confirmPassword);
    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    }

    const email = localStorage.getItem("changePasswordEmail");
    const verificationCode = localStorage.getItem("otp");
    try {
      await changePassword({ newPassword: password, confirmPassword, email, verificationCode }).unwrap();
      if (data.message === "Password changed successfully") {
        localStorage.removeItem("changePasswordEmail");
        localStorage.removeItem("otp");
        nav("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      setPasswordErrors(["Şifrə dəyişdirilərkən xəta baş verdi."]);
    }
  };

  return (
    <div className="password-reset-container">
      <div className="container">
        <div className="password-reset-box">
          <form method="post" onSubmit={handleSubmit}>
            <h2>Yeni şifrə</h2>
            <p className="password-reset-box__subtitle">Şifrəniz minimum 8 simvoldan ibarət olmalıdır.</p>
            <Input labelText="Şifrə" type="password" placeholder="Şifrənizi daxil edin" value={password} onChange={e => setPassword(e.target.value)} />
            <Input labelText="Şifrəni təkrarla" type="password" placeholder="Şifrənizi daxil edin" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

            {/* Error messages */}
            {passwordErrors.length > 0 &&
              passwordErrors.map((error, index) => (
                <span key={index} className="error-message text-danger text-start d-block">
                  {error}
                </span>
              ))}

            {/* Success message */}
            {isSuccess && data.message === "Password changed successfully" && <p className="success-message text-success text-start">Şifrə uğurla dəyişdirildi!</p>}

            <Button buttonText={isLoading ? "Yüklənir..." : "Yadda saxla"} disabled={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
