import React, { useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState(false)

  const handleSort = () => {
    setSort(!sort)
  }

  const filteredListings = listings.filter((listing) =>
    listing.description.includes(search)
  )

  const filteredAndSortedListings = [...filteredListings].sort((a, b) => {
    if (sort) {
      return a.location.localeCompare(b.location)
    }
    return a.id - b.id
  })

  return (
    <div className="app">
      <Header onSearch={setSearch} onSort={handleSort} />
      <ListingsContainer
        listings={filteredAndSortedListings}
        setListings={setListings}
      />
    </div>
  )
}

export default App
