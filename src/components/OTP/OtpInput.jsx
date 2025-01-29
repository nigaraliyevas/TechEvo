// import { useRef } from "react";
// import "./OtpInput.scss";

// const OtpInput = ({ onOtpChange }) => {
//   const inputRefs = useRef([]);
//   const otpCodeArray = useRef(Array(4).fill("")); // Use a ref to store the OTP code array

//   const handleInput = (e, index) => {
//     const value = e.target.value;
//     otpCodeArray.current[index] = value;
//     onOtpChange(otpCodeArray.current.join("")); // Combine digits and pass OTP code as a string

//     // Move to the next input if there is a value and it’s not the last input
//     if (value.length === 1 && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     // Move to the previous input on Backspace if current input is empty
//     if (e.key === "Backspace" && index > 0 && e.target.value === "") {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <div className="otp-input-container">
//       {Array(4)
//         .fill(0)
//         .map((_, index) => (
//           <input className="otp-input" key={`otp-input-${index}`} type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} ref={el => (inputRefs.current[index] = el)} onInput={e => handleInput(e, index)} onKeyDown={e => handleKeyDown(e, index)} aria-label={`OTP digit ${index + 1}`} />
//         ))}
//     </div>
//   );
// };

// export default OtpInput;
import { useRef, useEffect } from "react";
import "./OtpInput.scss";

const OtpInput = ({ onOtpChange, isResending }) => {
  const inputRefs = useRef([]);
  const otpCodeArray = useRef(Array(4).fill("")); // Use a ref to store the OTP code array

  const handleInput = (e, index) => {
    const value = e.target.value;
    otpCodeArray.current[index] = value;
    onOtpChange(otpCodeArray.current.join("")); // Combine digits and pass OTP code as a string

    // Move to the next input if there is a value and it’s not the last input
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input on Backspace if current input is empty
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (isResending) {
      // Clear the OTP array and input fields
      otpCodeArray.current = Array(4).fill("");
      inputRefs.current.forEach(input => {
        if (input) input.value = "";
      });
      onOtpChange(""); // Notify parent that OTP is cleared
    }
  }, [isResending, onOtpChange]);

  return (
    <div className="otp-input-container">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <input className="otp-input" key={`otp-input-${index}`} type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} ref={el => (inputRefs.current[index] = el)} onInput={e => handleInput(e, index)} onKeyDown={e => handleKeyDown(e, index)} aria-label={`OTP digit ${index + 1}`} required />
        ))}
    </div>
  );
};

export default OtpInput;
