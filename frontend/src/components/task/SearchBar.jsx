import { FaSearch } from "react-icons/fa";

function SearchBar({ search = "", setSearch }) {
  return (
    <div className="search-bar-container">
      <label className="search-label">
        Search Tasks
      </label>

      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch && setSearch(e.target.value)}
          placeholder="Search your tasks..."
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchBar;