import "./Background.css";
import bg from "../../assets/images/background.jpg";

function Background() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
    </div>
  );
}

export default Background;