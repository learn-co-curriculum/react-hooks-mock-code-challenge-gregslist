import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import Form from "./Form"

function App() {
  const [listings, setListings] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isSortListing, setIsSortListing] = useState(false)

  const filteredItems = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchInput.toLowerCase())
  )

  const sortedItems = isSortListing
    ? [...filteredItems].sort((a, b) =>
        a.location.toLowerCase().localeCompare(b.location.toLowerCase())
      )
    : filteredItems

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listingData) => setListings(listingData))
      .catch((error) => console.error("Fetch error:", error))
  }, [])

  function handleDeleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  function handleSearchItem(search) {
    setSearchInput(search)
  }

  function handleSortChange() {
    setIsSortListing(!isSortListing)
  }

  function handleSubmitForm(newListing) {
    setListings([...listings, newListing])
  }

  return (
    <div className="app">
      <Header onSearch={handleSearchItem} onSortChange={handleSortChange} />
      <Form onHandleSubmitForm={handleSubmitForm} />
      <ListingsContainer
        listings={sortedItems}
        onDelete={handleDeleteListing}
      />
    </div>
  )
}

export default App
