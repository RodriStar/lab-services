import "./Button.css";

const Button = ({ text, variant = "primary", disabled = false }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
