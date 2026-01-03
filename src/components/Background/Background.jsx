import "./Background.css";
import bg from "../../assets/images/background.jpg";
import SearchBar from "../SearchBar/SearchBar";

function Background() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="background-top">
        <SearchBar />
      </div>
    </div>
  );
}

export default Background;