import { useRef } from "react";
import "./OtpInput.scss";

const OtpInput = () => {
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="otp-input-container">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <input className="otp-input" key={`otp-input-${index}`} type="number" maxLength={1} minLength={1} ref={el => (inputRefs.current[index] = el)} onInput={e => handleInput(e, index)} onKeyDown={e => handleKeyDown(e, index)} />
          ))}
      </div>
    </>
  );
};

export default OtpInput;
