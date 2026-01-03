import "./Background.css";
import bg from "../../assets/images/background.jpg";
import SearchBar from "../SearchBar/SearchBar";

function Background({ children }) {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* SearchBar arriba, dentro del background */}
      <div className="background-top">
        <SearchBar />
      </div>

      {/* Contenido dinámico (cards, etc.) */}
      <div className="background-content">
        {children}
      </div>
    </div>
  );
}

export default Background;
