import React, { useState } from "react";

function Search({ listings, setSearchResults, setSearchMode }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (search !== "") {
      setSearchResults(
        listings.filter((item) =>
          item.description.toLowerCase().includes(search.toLowerCase())
        )
      );
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
