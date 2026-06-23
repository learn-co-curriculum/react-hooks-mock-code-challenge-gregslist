import React from "react";
function Search({ onSearch }) {
  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}
export default Search;