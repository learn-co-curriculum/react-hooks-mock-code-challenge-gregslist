import React, {useState} from "react";

function Search({filterListings}) {

  const [searchText, setSearchText] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    filterListings(searchText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        //value={""}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
