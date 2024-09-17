import "./Button.scss";
const Button = ({ buttonText,disabled = false }) => {
  return (
    <button type="submit" className="gradient-button" disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;
