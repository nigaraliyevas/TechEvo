import { useState } from "react";
import "./PasswordReset.scss";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);

  const fetchWithTimeout = (url, options, timeout = 300000) => {
    return Promise.race([fetch(url, options), new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), timeout))]);
  };
  const serverDomain = import.meta.env.server_domain;

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
  console.log(password == confirmPassword);

  const handleSubmit = async ev => {
    ev.preventDefault();

    const errors = validatePassword(password, confirmPassword);
    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    }
    try {
      const response = await fetchWithTimeout(
        `${serverDomain}/api/v1/auth/changePassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        },
        300000
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        setError("");
      } else {
        console.log("Error:", data);
        setError("Şifrə dəyişdirilərkən xəta baş verdi.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
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
            {passwordErrors.length > 0 &&
              passwordErrors.map((error, index) => (
                <p key={index} className="error-message text-danger text-start">
                  {error}
                </p>
              ))}{" "}
            <Button buttonText={"Yadda saxla"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
