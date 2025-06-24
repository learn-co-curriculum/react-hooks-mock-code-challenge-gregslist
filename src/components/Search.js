import React, { useState } from "react";

function Search({ listings, setListings }) {
  function handleSubmit(event) {
    event.preventDefault();
    const searchElement = event.target.querySelector("#search");
    setListings((nameListings) =>
      nameListings.filter((nameListing) =>
        nameListing.description.includes(searchElement.value)
      )
    );
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input type="text" id="search" placeholder="search free stuff" />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
