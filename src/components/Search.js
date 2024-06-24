import React, { useState } from "react"

function Search({ setSearch }) {
  const [inputValue, setInputValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    setSearch(inputValue)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
