import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar equipos de laboratorio..."
        className="searchbar-input"
        disabled
      />
      <button className="searchbar-button" disabled>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
