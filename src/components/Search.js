import React from "react"

function Search({ searchListings }) {
  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = document.getElementById("search").value
    searchListings(searchValue)
  }

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <input type="text" id="search" placeholder="search free stuff" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
