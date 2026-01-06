import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left">
          <div className="header-logo">
            <span>🔬 LAB SERVICES</span>
          </div>

          {/* ❤️ Icono Like */}
          <span
            className={`header-like ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            ♥
          </span>
        </div>

        <h2 className="header-cart">🛒</h2>
      </header>
    </div>
  );
};

export default Header;












