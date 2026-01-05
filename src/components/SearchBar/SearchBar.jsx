import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar equipos de laboratorio..."
        className="searchbar-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="searchbar-icon">🔍</span>
    </div>
  );
};

export default SearchBar;
