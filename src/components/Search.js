import React from "react"

function Search({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault()

    const searchValue = e.target.querySelector("input").value

    onSearch(searchValue)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input type="text" id="search" placeholder="search free stuff" />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
