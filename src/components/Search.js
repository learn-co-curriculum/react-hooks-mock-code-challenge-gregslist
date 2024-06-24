import React, { useState } from "react"

function Search({ listings, setListings, originalListings }) {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("Sort by Location: ON")

  const sortedListings = [...listings].sort((a, b) => {
    const listingA = a.location
    const listingB = b.location
    if (listingA < listingB) {
      return -1
    }
    if (listingA > listingB) {
      return 1
    }
    return 0
  })

  function handleSubmit(event) {
    event.preventDefault()

    if (search === "") {
      setListings(originalListings)
    } else {
      const listingsToDisplay = listings.filter((listing) =>
        listing.description.includes(search)
      )
      setListings(listingsToDisplay)
    }
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleSortClick() {
    if (sort === "Sort by Location: ON") {
      setListings(sortedListings)
      setSort("Sort by Location: OFF")
    } else if (sort === "Sort by Location: OFF") {
      setListings(originalListings)
      setSort("Sort by Location: ON")
    }
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
      <button type="button" onClick={handleSortClick}>
        {sort}
      </button>
    </form>
  )
}

export default Search
