import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;