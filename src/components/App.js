import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState([])

  const handleSearch = (searchTerm) => {
    const newListings = listings.filter((listing) =>
      listing.description.includes(searchTerm)
    )

    setFilteredListings(newListings)
  }

  const handleSort = (isSort) => {
    const sortedListings = [...filteredListings].sort((a, b) => {
      if (isSort) {
        return a.location.localeCompare(b.location)
      }
      return a.id - b.id
    })

    setFilteredListings(sortedListings)
  }

  useEffect(() => {
    setFilteredListings(listings)
  }, [listings])

  return (
    <div className="app">
      <Header onSearch={handleSearch} onSort={handleSort} />
      <ListingsContainer
        listings={filteredListings}
        setListings={setListings}
      />
    </div>
  )
}

export default App
