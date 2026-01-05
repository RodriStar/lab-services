import "./Background.css";
import bg from "../../assets/images/background.jpg";

function Background({ children }) {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="background-content">
        {children}
      </div>
    </div>
  );
}

export default Background;

