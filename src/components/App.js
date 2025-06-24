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

  useEffect(() => {
    setFilteredListings(listings)
  }, [listings])

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer
        listings={filteredListings}
        setListings={setListings}
      />
    </div>
  )
}

export default App
