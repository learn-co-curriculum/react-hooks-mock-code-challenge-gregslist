import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [searchedListings, setSearchedListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((r) => {
        setListings(r)
        setSearchedListings(r)
      })
  }, [])

  return (
    <div className="app">
      <Header listings={listings} setSearchedListings={setSearchedListings} />
      <ListingsContainer
        listings={listings}
        setListings={setListings}
        searchedListings={searchedListings}
        setSearchedListings={setSearchedListings}
      />
    </div>
  )
}

export default App
