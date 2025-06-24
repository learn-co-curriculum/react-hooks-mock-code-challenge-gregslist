import React, {useState} from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"
import Form from "./Form"

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleDeleteListing = (selectedListing) => {
    const updatedListings = listings.filter(
      (listing) => listing.id !== selectedListing.id
    )
    setListings(updatedListings)
  }

  const handleSort = () => {
    const sortedListings = [...listings].sort((a, b) => {
      return a.location.localeCompare(b.location)
    })
    setListings(sortedListings)
  }

  const handleNewListing = (newListing) => {
    const updatedListings = [...listings, newListing]
    setListings(updatedListings)
  }

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header
        onSort={handleSort}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Form onAddNewListing={handleNewListing} />
      <ListingsContainer
        listings={filteredListings}
        onListingsFetch={setListings}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  )
}

export default App
