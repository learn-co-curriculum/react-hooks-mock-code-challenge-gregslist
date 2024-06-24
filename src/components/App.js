import React, { useEffect, useState } from "react"
import Header from "./Header"
import NewForm from "./NewForm"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then(setListings)
  }, [])

  const handleDeleteListing = (deletedListingId) => {
    const newListings = listings.filter(
      (listing) => listing.id !== deletedListingId
    )
    setListings(newListings)
  }

  const handleAddListing = (newListing) => {
    setListings([...listings, newListing])
  }

  const filteredListings = listings.filter((listing) => {
    const listingDescription = listing.description.toLowerCase()

    return listingDescription.startsWith(search.toLowerCase())
  })

  const sortedAndFilteredListings = sort
    ? filteredListings.sort((a, b) => {
        return a[sort].localeCompare(b[sort])
      })
    : filteredListings

  return (
    <div className="app">
      <Header setSearch={setSearch} setSort={setSort} />
      <NewForm onAddListing={handleAddListing} />
      <ListingsContainer
        handleDeleteListing={handleDeleteListing}
        listings={sortedAndFilteredListings}
      />
    </div>
  )
}

export default App
