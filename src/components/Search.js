import React from "react"

function Search({setSearchTerm, searchTerm}) {
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const searchInput = document.querySelector("#search")

  //   setSearchTerm(searchInput.value)
  // }

  // return (
  //   <form className="searchbar" onSubmit={handleSubmit}>
  //     <input type="text" id="search" placeholder="search free stuff" />
  //     <button type="submit">🔍</button>
  //   </form>
  // )

  const handleChange = (e) => {
    const newItem = e.target.value
    setSearchTerm(newItem)
  }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleChange}
      />

      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
